import "./Colorselector.css"
import type { BackgroundColor } from "../../types/backgroundColors";
import { useCallback, useEffect, useRef, useState } from "react";

import redSvg from "../../assets/colors/red.svg";
import orangeSvg from "../../assets/colors/orange.svg";
import yellowSvg from "../../assets/colors/yellow.svg";
import greenSvg from "../../assets/colors/green.svg";
import blueSvg from "../../assets/colors/blue.svg";
import navySvg from "../../assets/colors/navy.svg";
import purpleSvg from "../../assets/colors/purple.svg";
import graySvg from "../../assets/colors/gray.svg";

type ColorSelectorProps = {
    value: BackgroundColor | null;
    onChange: (color: BackgroundColor) => void;
};

const colorOptions: {
    value: BackgroundColor;
    label: string;
    src: string;
}[] = [
    { value: "RED", label: "빨강", src: redSvg },
    { value: "ORANGE", label: "주황", src: orangeSvg },
    { value: "YELLOW", label: "노랑", src: yellowSvg },
    { value: "GREEN", label: "초록", src: greenSvg },
    { value: "BLUE", label: "파랑", src: blueSvg },
    { value: "NAVY", label: "남색", src: navySvg },
    { value: "PURPLE", label: "보라", src: purpleSvg },
    { value: "GRAY", label: "회색", src: graySvg },
];

const COUNT = colorOptions.length; // 8
const HALF = COUNT / 2; // 4
const ROTATE_LOCK_MS = 450; // 회전 애니메이션 동안 휠 입력 잠금 (CSS transition 시간과 맞추세요)
const WHEEL_THRESHOLD = 8; // 너무 작은 휠 입력 무시

const mod = (n: number) => ((n % COUNT) + COUNT) % COUNT;

const getOffset = (itemIndex: number, centerIndex: number) => {
    let offset = mod(itemIndex - centerIndex);
    if (offset >= HALF) offset -= COUNT; // 4~7 → -4~-1
    return offset;
};

function ColorSelector({ value, onChange }: ColorSelectorProps) {
    // index는 0~7로 되돌리지 않고 계속 누적시킵니다. (회전 방향이 뒤집히지 않도록)
    const [index, setIndex] = useState(() => {
        const initial = value
            ? colorOptions.findIndex((o) => o.value === value)
            : 0;
        return initial < 0 ? 0 : initial;
    });

    const indexRef = useRef(index);
    const lockedRef = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const onChangeRef = useRef(onChange);

    useEffect(() => {
        onChangeRef.current = onChange;
    }, [onChange]);

    /** step만큼 회전 (+1: 다음 색, -1: 이전 색) */
    const rotate = useCallback((step: number) => {
        const next = indexRef.current + step;
        indexRef.current = next;
        setIndex(next);
        onChangeRef.current(colorOptions[mod(next)].value);
    }, []);

    /** 잠금을 걸어 애니메이션 도중 연속 회전을 막음 */
    const rotateWithLock = useCallback(
        (step: number) => {
            if (lockedRef.current || step === 0) return;
            lockedRef.current = true;
            rotate(step);
            window.setTimeout(() => {
                lockedRef.current = false;
            }, ROTATE_LOCK_MS);
        },
        [rotate]
    );

    /* 마우스 휠: React onWheel은 passive라 preventDefault가 안 되므로 직접 등록 */
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault(); // 회전 중에는 페이지 스크롤 방지
            if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;
            rotateWithLock(e.deltaY > 0 ? 1 : -1);
        };

        el.addEventListener("wheel", handleWheel, { passive: false });
        return () => el.removeEventListener("wheel", handleWheel);
    }, [rotateWithLock]);

    /* 부모에서 value가 바뀐 경우, 가장 가까운 방향으로 회전해서 맞춤 */
    useEffect(() => {
        if (!value) return;
        const target = colorOptions.findIndex((o) => o.value === value);
        if (target < 0) return;

        let delta = mod(target - indexRef.current);
        if (delta === 0) return;
        if (delta > HALF) delta -= COUNT;

        indexRef.current += delta;
        setIndex(indexRef.current);
    }, [value]);

    /* value가 null이면 첫 렌더 시 중앙 색을 부모에게 알림 */
    useEffect(() => {
        if (value === null) {
            onChangeRef.current(colorOptions[mod(indexRef.current)].value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowRight") {
            e.preventDefault();
            rotateWithLock(1);
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            rotateWithLock(-1);
        }
    };

    const centerOption = colorOptions[mod(index)];

    return (
        <div className="color-selector">
            {/* 가운데 색상 이름 + 점 */}
            <div className="color-selector__label" aria-live="polite">
                <span>{centerOption.value}</span>
                <span className="color-selector__dot" aria-hidden="true" />
            </div>

            <div
                ref={containerRef}
                className="color-selector__stage"
                role="group"
                aria-label="배경 색상 선택 (마우스 휠 또는 좌우 방향키로 회전)"
                onKeyDown={handleKeyDown}
            >
                {colorOptions.map((option, i) => {
                    const offset = getOffset(i, index);
                    // -4는 -3과 같은 대기 슬롯으로 취급 (슬롯 종류를 7개로 고정)
                    const slot = Math.max(-3, Math.min(3, offset));
                    const isCenter = offset === 0;
                    const isVisible = Math.abs(offset) <= 2;

                    return (
                        <button
                            key={option.value}
                            type="button"
                            className="color-selector__button"
                            data-slot={slot}
                            onClick={() => {
                                if (!isVisible) return;
                                // 눌린 색이 중앙으로 오도록 회전 (중앙이면 변화 없음)
                                rotateWithLock(offset);
                            }}
                            aria-label={`${option.label} 배경 선택`}
                            aria-pressed={isCenter}
                            aria-hidden={!isVisible}
                            tabIndex={isVisible ? 0 : -1}
                            title={option.label}
                        >
                            <img
                                className="color-selector__image"
                                src={option.src}
                                alt=""
                                draggable={false}
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default ColorSelector;