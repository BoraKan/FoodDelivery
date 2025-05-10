import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../register/register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const history = useHistory();

  async function handleRegister() {
    if (!username.trim() || !firstName.trim() || !lastName.trim() || !password.trim()) {
      setNameErr(true);
      return;
    }

    if (password.length < 5) {
      alert("Şifre en az 5 karakter olmalı");
      return;
    }

    setNameErr(false);

    try {
      const res = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, firstName, lastName }),
      });

      const data = await res.json();

      if (res.status === 409) {
        setMsg(data.error || "Bu kullanıcı adı zaten kullanılıyor.");
      } else if (!res.ok) {
        setMsg("Kayıt başarısız.");
      } else {
        setMsg("Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz...");
        setTimeout(() => {
          history.push("/login"); // ✅ Login sayfasına yönlendirme
        }, 1500);
      }
    } catch (err) {
      console.error("Kayıt sırasında hata:", err);
      setMsg("Sunucu hatası, lütfen tekrar deneyin.");
    }
  }

  return (
    <div className="register-body">
      <div className="register-main">
        <h1>Kayıt Formu</h1>
        {nameErr && <p className="errP">*Lütfen tüm alanları doldurun*</p>}
        {msg && <p className="errP">{msg}</p>}
        <br />
        <p>İsim</p>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <p>Soyisim</p>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <p>Kullanıcı Adı</p>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <p>Şifre</p>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <button onClick={handleRegister}>Kayıt Ol</button>
      </div>
    </div>
  );
}

export default Register;
