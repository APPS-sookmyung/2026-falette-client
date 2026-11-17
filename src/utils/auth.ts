import type { AuthUser } from "../types/auth";

// 테스트용 로그인 상태. 백엔드 연결 후 변경할 것
// "GOOGLE" | "GUEST" | null
let testAuth: "GOOGLE" | "GUEST" | null = "GOOGLE";   // const → let, 이름도 변경

export async function getMe(): Promise<AuthUser | null> {
  // ★ 백엔드 연결 시 GET /api/v1/auth/me 로 교체 (401이면 null 반환)
  if (testAuth === "GOOGLE") {
    return {
      isAuthenticated: true,
      provider: "GOOGLE",
      userId: 1,
      email: "test@example.com",
      nickname: "테스트 사용자",
    };
  }

  if (testAuth === "GUEST") {
    return {
      isAuthenticated: false,
      provider: "GUEST",
      guestUuid: "test-guest-uuid",
    };
  }

  return null;
}

// 추가
export async function logout(): Promise<void> {
  // ★ 백엔드 연결 시 POST /api/v1/auth/logout 로 교체 + localStorage의 UUID 삭제
  testAuth = null;
}