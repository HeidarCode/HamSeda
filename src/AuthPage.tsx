import React, { useState } from "react";

type Role = "speaker" | "admin";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<Role>("speaker");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // ورود مدیر
    if (isLogin && role === "admin") {
      if (username === "adminGoya" && password === "09103134316") {
        localStorage.setItem("role", "admin");
        alert("مدیر عزیز، خوش آمدید.");
        window.location.href = "/admin";
        return;
      } else {
        setError("اطلاعات مدیر اشتباه است!");
        return;
      }
    }

    // ورود گوینده
    if (isLogin && role === "speaker") {
      if (!username || !password) {
        setError("لطفاً نام کاربری و رمز عبور را وارد کنید.");
        return;
      }

      localStorage.setItem("role", "speaker");
      alert("ورود موفق!");
      window.location.href = "/panel";
      return;
    }

    // ثبت نام برای گوینده
    if (!isLogin && role === "speaker") {
      if (!username || !password) {
        setError("لطفاً همه فیلدها را پر کنید.");
        return;
      }

      alert("ثبت‌نام انجام شد! اکنون وارد شوید.");
      setIsLogin(true);
      return;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff] via-[#ffd54a]/20 to-[#6c3dbf]/20 flex items-center justify-center px-4 font-[Vazirmatn] rtl">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">

        <h2 className="text-2xl font-extrabold text-center text-[#6c3dbf] mb-6">
          {isLogin ? "ورود به حساب" : "ایجاد حساب جدید"}
        </h2>

        {/* انتخاب نقش */}
        <div className="flex justify-center gap-6 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="speaker"
              checked={role === "speaker"}
              onChange={() => setRole("speaker")}
            />
            <span>گوینده</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="admin"
              checked={role === "admin"}
              onChange={() => setRole("admin")}
            />
            <span>مدیر</span>
          </label>
        </div>

        {/* فرم */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block mb-1 text-sm font-medium">نام کاربری</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#6c3dbf]"
              placeholder="نام کاربری..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">رمز عبور</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#6c3dbf]"
              placeholder="رمز عبور..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-[#6c3dbf] text-white rounded-xl hover:bg-[#572da3] transition"
          >
            {isLogin ? "ورود" : "ثبت نام"}
          </button>
        </form>

        <p className="text-center text-sm mt-5">
          {isLogin ? (
            <>
              حساب ندارید؟{" "}
              <span
                onClick={() => setIsLogin(false)}
                className="text-[#6c3dbf] cursor-pointer font-semibold"
              >
                ثبت نام
              </span>
            </>
          ) : (
            <>
              حساب دارید؟{" "}
              <span
                onClick={() => setIsLogin(true)}
                className="text-[#6c3dbf] cursor-pointer font-semibold"
              >
                ورود
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
