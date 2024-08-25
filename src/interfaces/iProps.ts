import { SignInFlow } from "@/features/auth/types";

// SignInCard
export interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}

// SignUpCard
export interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}
