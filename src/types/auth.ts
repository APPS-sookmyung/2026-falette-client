// 구글 로그인 사용자
export interface GoogleUser {
  isAuthenticated: true;
  provider: "GOOGLE";
  userId: number;
  email: string;
  nickname: string;
}

// 비회원 사용자
export interface GuestUser {
  isAuthenticated: false;
  provider: "GUEST";
  guestUuid: string;
}

// 사용자 정보
export type AuthUser = GoogleUser | GuestUser;