import React, { useState, useEffect } from "react";

interface VoiceActor {
  id: string;
  name: string;
  description: string;
  image: string; // Base64
  audio: string; // Base64
}

const AdminPanel: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string>("");
  const [audio, setAudio] = useState<string>("");
  const [voiceActors, setVoiceActors] = useState<VoiceActor[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("voiceActors");
    if (saved) setVoiceActors(JSON.parse(saved));
  }, []);

  const saveToStorage = (data: VoiceActor[]) => {
    localStorage.setItem("voiceActors", JSON.stringify(data));
  };

  // Convert file → Base64
  const handleFileToBase64 = (file: File, callback: (base64: string) => void) => {
    const reader = new FileReader();
    reader.onload = () => callback(reader.result as string);
    reader.readAsDataURL(file);
  };

  // افزودن گوینده جدید
  const addVoiceActor = () => {
    if (!name || !description || !image || !audio) {
      alert("همه فیلدها باید تکمیل شوند.");
      return;
    }

    const newActor: VoiceActor = {
      id: crypto.randomUUID(),
      name,
      description,
      image,
      audio
    };

    const updated = [...voiceActors, newActor];
    setVoiceActors(updated);
    saveToStorage(updated);

    setName("");
    setDescription("");
    setImage("");
    setAudio("");

    alert("گوینده با موفقیت اضافه شد!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff] via-[#ffd54a]/20 to-[#6c3dbf]/20 px-6 py-10 font-[Vazirmatn] rtl">

      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-8">

        <h2 className="text-3xl font-extrabold text-[#6c3dbf] text-center mb-6">
          پنل مدیریت گویندگان
        </h2>

        {/* فرم */}
        <div className="space-y-4">

          <div>
            <label className="font-semibold">نام گوینده:</label>
            <input
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#6c3dbf]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="مثلاً: علی رضایی"
            />
          </div>

          <div>
            <label className="font-semibold">توضیحات گوینده:</label>
            <textarea
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#6c3dbf]"
              value={description}
              rows={4}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="توضیحاتی درباره گوینده..."
            />
          </div>

          {/* آپلود عکس */}
          <div>
            <label className="font-semibold">عکس گوینده:</label>
            <input
              type="file"
              accept="image/*"
              className="block mt-1"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileToBase64(file, setImage);
              }}
            />
            {image && (
              <img
                src={image}
                alt="speaker"
                className="w-28 h-28 object-cover rounded-xl mt-3 shadow"
              />
            )}
          </div>

          {/* آپلود صوت */}
          <div>
            <label className="font-semibold">نمونه صدای گوینده:</label>
            <input
              type="file"
              accept="audio/*"
              className="block mt-1"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileToBase64(file, setAudio);
              }}
            />

            {audio && (
              <audio controls className="mt-3 w-full">
                <source src={audio} />
                مرورگر شما از پخش صوت پشتیبانی نمی‌کند.
              </audio>
            )}
          </div>

          <button
            onClick={addVoiceActor}
            className="w-full py-3 bg-[#6c3dbf] text-white rounded-xl font-semibold hover:bg-[#562ca5] transition"
          >
            ثبت گوینده
          </button>
        </div>
      </div>

      {/* لیست گویندگان */}
      <div className="max-w-3xl mx-auto mt-10">
        <h3 className="text-xl font-bold text-[#6c3dbf] mb-4">لیست گویندگان ثبت شده</h3>

        <div className="grid grid-cols-1 gap-6">
          {voiceActors.map(actor => (
            <div
              key={actor.id}
              className="p-5 bg-white/50 backdrop-blur-lg shadow rounded-2xl flex items-center gap-5"
            >
              <img
                src={actor.image}
                className="w-24 h-24 rounded-xl object-cover shadow"
              />

              <div className="flex-1">
                <h4 className="text-lg font-bold">{actor.name}</h4>
                <p className="text-sm text-gray-700 mt-2">{actor.description}</p>

                <audio controls className="mt-3 w-full">
                  <source src={actor.audio} />
                </audio>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AdminPanel;
