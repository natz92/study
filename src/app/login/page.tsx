import { StoreHeader } from "@/components/store-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <>
      <StoreHeader />
      <main className="grid min-h-[calc(100vh-4rem)] place-items-center bg-stone-50 px-4 py-10">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">로그인</CardTitle>
            <CardDescription>
              인증 로직 없이 화면 구성만 확인하는 목업 폼입니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <label className="grid gap-2 text-sm font-medium">
                이메일
                <Input placeholder="study@orange.dev" type="email" />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                비밀번호
                <Input placeholder="비밀번호" type="password" />
              </label>
              <Button className="mt-2" type="button">
                로그인
              </Button>
            </form>
            <div className="mt-6 flex items-center justify-between text-sm text-stone-500">
              <span>계정이 없나요?</span>
              <span className="font-medium text-stone-900">회원가입 목업</span>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
