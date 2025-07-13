"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, Camera, Sparkles, X } from "lucide-react"
import Image from "next/image"
import { BackgroundMusic } from "@/components/background-music"

export default function BirthdayWebsite() {
  const [currentSection, setCurrentSection] = useState(0)
  const [password, setPassword] = useState("")
  const [openEnvelopes, setOpenEnvelopes] = useState([false, false, false])
  const [showSparkles, setShowSparkles] = useState(false)
  const [openEnvelope, setOpenEnvelope] = useState<number | null>(null)
  const [typingText, setTypingText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [sparklePositions, setSparklePositions] = useState<
    Array<{
      left: string
      top: string
      delay: string
      duration: string
      size: string
    }>
  >([])

  const sections = ["password", "greeting", "calendar", "envelopes", "gallery", "final"]

  // Days of week with unique keys
  const daysOfWeek = [
    { key: "sun", label: "S" },
    { key: "mon", label: "M" },
    { key: "tue", label: "T" },
    { key: "wed", label: "W" },
    { key: "thu", label: "T" },
    { key: "fri", label: "F" },
    { key: "sat", label: "S" },
  ]

  // Generate sparkle positions only on client side
  useEffect(() => {
    const positions = Array.from({ length: 8 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 2}s`,
      size: `${8 + Math.random() * 4}px`,
    }))
    setSparklePositions(positions)

    const timer = setTimeout(() => setShowSparkles(true), 500)
    return () => clearTimeout(timer)
  }, [currentSection])

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
    }
  }

  const handlePasswordSubmit = () => {
    if (password.toLowerCase() === "sayang") {
      nextSection()
    } else {
      alert("Password salahhh, masaa bocill nda tauuu")
    }
  }

  const toggleEnvelope = (index: number) => {
    setOpenEnvelope(index)
    setTypingText("")
    setIsTyping(true)

    const messages = [
      "Thaloww bocil aku sayangg, happy birtdayy ya sayang akuu, cantik akuu, bocil akuuu, semua2nya akuu, alhamdulillah ya sayang akuu masih terus diberi umur sampe 21 sekarang ini sayang aku yaa, semoga panjang umurr, sehat selalu sayangg, semoga selalu dalam lindungan allah ya sayangg, semoga terus dipenuhi dan di kelilingi keberkahan sayang selama umur 21 ini dan seterusnya, semoga apa aja yang kamu mauu dan mimpi kamu bisa terwujud semua ya sayang akuuu, semoga dilancarkan juga rezekinyaa, lebih dikasih tenaga lagi buat ngadepin yang kamu gasuka sayang aku yaa, lebih kuatt lagiii lebihh banyak senyumnya lagiii, tapi kalo gakuatt tenang okeyy masih ada aku yang ada dibelakang kamu hehehe. intinyaa semoga semuaa yang baikk, yang positiff selalu ada di sekeliling kamu ya sayang akuuuu, tapi kalo ada yang ga sesuai dengann apa yang kamu mauu, ga semuanya positiff jugaa, kamu haruss teruss sabar okeyy sayanggg!!!",
      "taku mau ngucapinnn maaci bangett ya sayang akuu karena kamuu udahhh sabarr bangett samaa semua di skitar kamuu, khususnya akuu heheheh, walaupun kadang pala batu akunyaa, susah dibilanginn, lagi merasa benerrr trusss, maafinn dan maaci banyakk ya sayang akuuu. maaci banyakk jugaa udahhh selalu nemeninn aku dari duluu, slalu bantuin akuuu, slalu adaa buat akuuu sayangg, maaci banyakk banget kamu juga mau nerima aku apa ada nya ya sayang akuu cantikk. maaci banyakk jugaa kamu udahh selalu kuatt sayangg akuu buat jalanin semua yang kamu gasukaa, ngelewatin semua cape yang selalu datengg, tumpukan kegiatan yang gaada abisnya, omongan2 yang kamu gasuka diluar sanaa, kamu keren sayangg bisa teruss ngelewatin ituu, walaupun banyak nagissnya, banyak sedihnya, tapi aku bangga banget sama kamu sayanggg, bangga bangett kamu bisa sekuat itu sayanggg, aku sendiri mungkin belum tentu bisa kaya kamu gitu hehehe.",
      "ttapi tenangg yaa sayangg akuuu, aku tau ga selamanya kamu bisa teruss kuat gituu, aku yakinn pasti ada masanya kamu capek banget kan sayangg, ada masanya kamu sedihh juga, gamungkin selamanya bisa kuatt, ada akuu ya sayangg akuuu, aku masihh teruss disini sayanggg, jangan takut buat cerita semuanya ke akuu, jangan takutt buat ngungkapin apa yang kamu rasa ke aku ataupun ke siapapun itu ya sayangg akuu, maaci banyakk udah ngijinin aku yang jadi bagiann ituuu, bagian buat kamuu crita kamu sedih kamu nangiss itu sayanggg. akuu insyaallah bakal teruss ada disini nemenin kamu ya sayangg jadi kamu jangan khawatirr, kamuu jang ovt teruss sama pikiran kamu yang ini ituu, aku ga berubah kok sayang akuu, cuman kegiatan aku aja yang berubah yang bkin aku belu terbiasa dan banyak ga megang hpnya sayangg, aku ga kemana mana kokkk masih teruss sama kamu dan gaakan nyari siapapun lagii, aku sayanggg sama kamuu dan akan seterusnya begitu sayangg akuuu, i love youuu sayangg aku yaaa ❤️❤️",
      "iyangg terakhirr intinya doa darii akuuu smoga kamuuu bisa suksesss kedepannyaaa, hal hal baikk selalu menyertai kamuuu, slalu di kelilingi orang yang lebih baik lagiii, bisa jadi pribadi yang lebih baik lagiii, bisaa banggain kedua orang tuaa, bisaa ingetinn aku trus juga kalo aku ada salahhh wkwkwkw, rezekinya juga lancarr terusss, bisaa senyumm terusss senengg terusss, kondisinya kedepann dibuatt lebih baik lagi ya sayanggg, apapun tantangannyaa kamu bisa lewatinnn yang pasti bareng aku jugaaa, intinya semoga apapun yang kamu mau kedepannya semoga sejalan dengan apa yang allah mau juga ya sayanggg, percaya semuanya pastii kearah yang baik akhirnyaaa. Smoga kita bisa sama sama terus ya sayang akuuu, jangann bosennn sama akuuu ya sayanggg, akuu sayangggg kamuuuu, i lovee youu sayang aku cantikkk 🫶🫶", // New message for the fourth envelope
    ]

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < messages[index].length) {
        setTypingText((prev) => prev + messages[index].charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)
      }
    }, 30)

    return () => clearInterval(typingInterval)
  }

  const closeEnvelope = () => {
    setOpenEnvelope(null)
    setTypingText("")
    setIsTyping(false)
  }

  const FloatingSparkles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {sparklePositions.map((position, i) => (
        <Sparkles
          key={`sparkle-${i}`}
          className={`absolute text-yellow-300 animate-pulse ${showSparkles ? "opacity-60" : "opacity-0"}`}
          style={{
            left: position.left,
            top: position.top,
            animationDelay: position.delay,
            animationDuration: position.duration,
            fontSize: position.size,
          }}
        />
      ))}
    </div>
  )

  const PasswordSection = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-25 to-orange-50 p-8 relative">
      <FloatingSparkles />
      <Card className="w-full max-w-md bg-white/70 backdrop-blur-xl shadow-2xl border-0 rounded-3xl overflow-hidden">
        <CardContent className="p-10 text-center space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center">
              <Image src="/images/love-envelope.png" alt="Love envelope" width={80} height={80} className="w-20 h-20" />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-light text-gray-700 leading-relaxed">haloww bocilll akuu</h2>
              <p className="text-lg text-gray-600 font-medium">
                cobaa tebak duluu passwordnyaa, clue nya rasa kamu ke aku...
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Input
              type="text"
              placeholder="ketik disini ya..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-center text-lg py-4 rounded-2xl border-2 border-pink-200 focus:border-pink-400 focus:ring-pink-200 bg-white/80 placeholder:text-gray-400"
              onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
              autoFocus
            />
            <Button
              onClick={handlePasswordSubmit}
              className="w-full bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 hover:from-pink-500 hover:via-rose-500 hover:to-red-500 text-white py-4 rounded-2xl text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              haruss bener yakk✨
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const GreetingSection = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-25 to-orange-50 p-8 relative">
      <FloatingSparkles />
      <Card className="w-full max-w-3xl bg-white/70 backdrop-blur-xl shadow-2xl border-0 rounded-3xl overflow-hidden">
        <CardContent className="p-16 text-center space-y-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 leading-relaxed">
              cieee yang sayangg ama akuuu AHAHAHHAHA
            </h1>
          </div>

          <Button
            onClick={nextSection}
            className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 hover:from-amber-500 hover:via-yellow-500 hover:to-orange-500 text-white px-12 py-4 rounded-full text-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            diklikk yaa buatt lanjuttt
            <Image src="/images/star.png" alt="Star" width={24} height={24} className="w-6 h-6" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )

  const CalendarSection = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-25 to-cyan-50 p-8 relative">
      <FloatingSparkles />
      <Card className="w-full max-w-6xl bg-white/70 backdrop-blur-xl shadow-2xl border-0 rounded-3xl overflow-hidden">
        <CardContent className="p-16">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-16">
            {/* Calendar */}
            <div className="bg-white/90 p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">JULI</h3>
                <p className="text-lg text-gray-600">2024</p>
              </div>
              <div className="grid grid-cols-7 gap-3">
                {daysOfWeek.map((day) => (
                  <div key={day.key} className="p-3 font-semibold text-gray-500 text-center">
                    {day.label}
                  </div>
                ))}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                  <div
                    key={`date-${date}`}
                    className={`p-3 rounded-2xl text-center font-medium transition-all duration-300 ${
                      date === 27
                        ? "bg-gradient-to-r from-red-400 to-pink-400 text-white font-bold ring-4 ring-red-200 shadow-lg transform scale-110 animate-pulse"
                        : "text-gray-700 hover:bg-gray-100 hover:scale-105"
                    }`}
                  >
                    {date}
                  </div>
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Image
                    src="/images/party-popper.png"
                    alt="Party popper"
                    width={100}
                    height={100}
                    className="w-24 h-24"
                  />
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-relaxed">
                  it's urrr speciall dayyy bocill!!!
                </h2>
              </div>
              <Button
                onClick={nextSection}
                className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-500 hover:via-teal-500 hover:to-cyan-500 text-white px-12 py-4 rounded-full text-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                klik disini buat lanjut okee
                <Image src="/images/star.png" alt="Star" width={24} height={24} className="w-6 h-6 ml-2 inline" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const EnvelopesSection = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-purple-25 to-fuchsia-50 p-8 relative">
      <FloatingSparkles />
      <Card className="w-full max-w-6xl bg-white/70 backdrop-blur-xl shadow-2xl border-0 rounded-3xl overflow-hidden">
        <CardContent className="p-16">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/love-envelope.png"
                  alt="Love envelope"
                  width={120}
                  height={120}
                  className="w-28 h-28 drop-shadow-lg"
                />
              </div>
              <h2 className="text-4xl font-light text-gray-800">bukaa satu-satu ya sayanggg</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center">
              {/* Envelope 1 */}
              <div className="text-center space-y-6">
                <div
                  onClick={() => toggleEnvelope(0)}
                  className="cursor-pointer transform hover:scale-110 transition-all duration-300 hover:rotate-3 relative"
                >
                  <Image
                    src="/images/love-envelope.png"
                    alt="Love envelope 1"
                    width={100}
                    height={100}
                    className="w-40 h-40 drop-shadow-lg mx-auto"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Envelope 2 (with heart) */}
              <div className="text-center space-y-6">
                <div
                  onClick={() => toggleEnvelope(1)}
                  className="cursor-pointer transform hover:scale-110 transition-all duration-300 hover:-rotate-3 relative"
                >
                  <Image
                    src="/images/love-envelope.png"
                    alt="Love envelope 2"
                    width={100}
                    height={100}
                    className="w-40 h-40 drop-shadow-lg mx-auto"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Envelope 3 */}
              <div className="text-center space-y-6">
                <div
                  onClick={() => toggleEnvelope(2)}
                  className="cursor-pointer transform hover:scale-110 transition-all duration-300 hover:rotate-3 relative"
                >
                  <Image
                    src="/images/love-envelope.png"
                    alt="Love envelope 3"
                    width={100}
                    height={100}
                    className="w-40 h-40 drop-shadow-lg mx-auto"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Envelope 4 (NEW) */}
              <div className="text-center space-y-6">
                <div
                  onClick={() => toggleEnvelope(3)}
                  className="cursor-pointer transform hover:scale-110 transition-all duration-300 hover:-rotate-3 relative"
                >
                  <Image
                    src="/images/love-envelope.png"
                    alt="Love envelope 4"
                    width={100}
                    height={100}
                    className="w-40 h-40 drop-shadow-lg mx-auto"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>

            <Button
              onClick={nextSection}
              className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 hover:from-violet-500 hover:via-purple-500 hover:to-fuchsia-500 text-white px-12 py-4 rounded-full text-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              lanjutt lagiii ayuu masih ada nihh 💕
            </Button>
          </div>
        </CardContent>
      </Card>
      {/* Paper Modal */}
      {openEnvelope !== null && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
          onClick={closeEnvelope}
        >
          <div
            className="relative transform scale-100 transition-all duration-500"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "800px", // Increased width
              height: "600px", // Increased height
            }}
          >
            {/* Paper Background */}
            <div
              className="relative w-full h-full"
              style={{
                backgroundImage: `url('/images/paper-note.jpg')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {/* Close Button */}
              <button
                onClick={closeEnvelope}
                className="absolute top-4 right-4 p-2 rounded-full bg-red-400/80 hover:bg-red-500/80 transition-colors duration-200 z-10"
              >
                <X className="h-4 w-4 text-white" />
              </button>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="text-center space-y-6 max-w-sm">
                  <div className="flex justify-center">
                    <Image
                      src="/images/love-envelope.png"
                      alt="Love envelope"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="min-h-[100px] flex items-center justify-center">
                    <p className="text-sm text-gray-800 leading-relaxed font-medium text-center overflow-y-auto max-h-[calc(100%-100px)]">
                      {typingText}
                      {isTyping && <span className="animate-pulse text-pink-500">|</span>}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const GallerySection = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-25 to-sky-50 p-8 relative">
      <FloatingSparkles />
      <Card className="w-full max-w-7xl bg-white/70 backdrop-blur-xl shadow-2xl border-0 rounded-3xl overflow-hidden">
        <CardContent className="p-16 space-y-16">
          {/* Current Photos */}
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-4">
                <Image src="/images/star.png" alt="Star" width={80} height={80} className="w-20 h-20 drop-shadow-lg" />
              </div>
              <h2 className="text-3xl font-light text-gray-800">inii kitaa sekarangg yaaaaa</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Image
                  src="/images/first-photo.png"
                  alt="Foto kita sekarang"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {[2, 3, 4].map((i) => (
                <div
                  key={`current-photo-${i}`}
                  className="aspect-square bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <Camera className="h-16 w-16 text-gray-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Old Photos */}
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <div className="text-5xl">😛</div>
              <h2 className="text-3xl font-light text-gray-800">inii kita duluuu HAHAHAHA lucu bangettt</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={`old-photo-${i}`}
                  className="aspect-square bg-gradient-to-br from-amber-200 via-yellow-200 to-orange-200 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <Camera className="h-16 w-16 text-gray-500" />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={nextSection}
              className="bg-gradient-to-r from-indigo-400 via-blue-400 to-sky-400 hover:from-indigo-500 hover:via-blue-500 hover:to-sky-500 text-white px-12 py-4 rounded-full text-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              ke penutup yuk
              <Image src="/images/party-popper.png" alt="Party popper" width={24} height={24} className="w-6 h-6" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const FinalSection = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-25 to-red-50 p-8 relative">
      <FloatingSparkles />
      <Card className="w-full max-w-5xl bg-white/70 backdrop-blur-xl shadow-2xl border-0 rounded-3xl overflow-hidden">
        <CardContent className="p-16 text-center space-y-12">
          <div className="space-y-8">
            <div className="flex justify-center">
              <Image
                src="/images/birthday-cake.png"
                alt="Birthday cake"
                width={120}
                height={120}
                className="w-32 h-32"
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-light bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent leading-relaxed">
                ENJOYY URR 21th BIRTHDAYY!!
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed">
                sekalii lagii happy birthdayy yaa sayangg, i love youu!!
              </h2>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Image src="/images/party-popper.png" alt="Party popper" width={60} height={60} className="w-16 h-16" />
            <Image src="/images/balloons.png" alt="Balloons" width={60} height={60} className="w-16 h-16" />
            <Image src="/images/star.png" alt="Star" width={60} height={60} className="w-16 h-16" />
          </div>

          <Button
            onClick={() => setCurrentSection(0)}
            className="bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 hover:from-rose-500 hover:via-pink-500 hover:to-red-500 text-white px-12 py-4 rounded-full text-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            ulangi dari awal yuk 💖
          </Button>
        </CardContent>
      </Card>
    </div>
  )

  const renderSection = () => {
    switch (sections[currentSection]) {
      case "password":
        return <PasswordSection />
      case "greeting":
        return <GreetingSection />
      case "calendar":
        return <CalendarSection />
      case "envelopes":
        return <EnvelopesSection />
      case "gallery":
        return <GallerySection />
      case "final":
        return <FinalSection />
      default:
        return <PasswordSection />
    }
  }

  return (
    <div className="relative">
      {/* Background Music Player */}
      <BackgroundMusic src="/audio/semuaLaguCinta.mp3" autoPlay={true} />

      {renderSection()}

      {/* Progress indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-50">
        {sections.map((_, index) => (
          <div
            key={`progress-${index}`}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentSection
                ? "bg-gradient-to-r from-pink-400 to-rose-400 scale-125 shadow-lg"
                : index < currentSection
                  ? "bg-gradient-to-r from-gray-400 to-gray-500"
                  : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #ec4899;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #ec4899;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  )
}
