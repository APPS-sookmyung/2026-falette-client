// 원본 SVG의 파란색 계열을 기준으로 한 대략적인 색조 회전값.
// 실제 화면을 보면서 각 각도를 조금씩 조정하면 됩니다.
export type BackgroundColor =
  | "RED" | "ORANGE" | "YELLOW" | "GREEN" | "BLUE"
  | "NAVY" | "PURPLE" | "GRAY" ;

export const colorFilters: Record<BackgroundColor, string> = {
    RED: "hue-rotate(110deg)",
    ORANGE: "hue-rotate(150deg) saturate(1.2)",
    YELLOW: "hue-rotate(173deg) saturate(1.2) brightness(1.2)",
    GREEN: "hue-rotate(240deg) saturate(1.1) brightness(1.1)",
    BLUE: "hue-rotate(320deg) saturate(1.1) brightness(1.1)",
    NAVY: "hue-rotate(350deg) saturate(1.5) brightness(0.9)",
    PURPLE: "hue-rotate(30deg) saturate(1.1) brightness(0.9)",
    GRAY: "grayscale(1)",
};
