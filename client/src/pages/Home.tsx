import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Info, 
  MessageSquare, 
  Smartphone, 
  AlertTriangle, 
  Shield, 
  CheckCircle, 
  Wrench, 
  HelpCircle, 
  Link as LinkIcon,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
              KI-Coach für Senioren
            </h1>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-4 flex-wrap">
              <Button variant="ghost" onClick={() => scrollToSection('start')} className="text-lg">Start</Button>
              <Button variant="ghost" onClick={() => scrollToSection('ki')} className="text-lg">Was ist KI?</Button>
              <Button variant="ghost" onClick={() => scrollToSection('chatgpt')} className="text-lg">ChatGPT</Button>
              <Button variant="ghost" onClick={() => scrollToSection('anleitung')} className="text-lg">Anleitung</Button>
              <Button variant="ghost" onClick={() => scrollToSection('risiken')} className="text-lg">Risiken</Button>
              <Button variant="ghost" onClick={() => scrollToSection('sicherheit')} className="text-lg">Sicherheit</Button>
              <Button variant="ghost" onClick={() => scrollToSection('crap')} className="text-lg">CRAP-Check</Button>
              <Button variant="ghost" onClick={() => scrollToSection('tools')} className="text-lg">Tools</Button>
              <Button variant="ghost" onClick={() => scrollToSection('faq')} className="text-lg">FAQ</Button>
              <Button variant="ghost" onClick={() => scrollToSection('links')} className="text-lg">Links</Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-2">
              <Button variant="ghost" onClick={() => scrollToSection('start')} className="text-lg w-full">Start</Button>
              <Button variant="ghost" onClick={() => scrollToSection('ki')} className="text-lg w-full">Was ist KI?</Button>
              <Button variant="ghost" onClick={() => scrollToSection('chatgpt')} className="text-lg w-full">ChatGPT</Button>
              <Button variant="ghost" onClick={() => scrollToSection('anleitung')} className="text-lg w-full">Anleitung</Button>
              <Button variant="ghost" onClick={() => scrollToSection('risiken')} className="text-lg w-full">Risiken</Button>
              <Button variant="ghost" onClick={() => scrollToSection('sicherheit')} className="text-lg w-full">Sicherheit</Button>
              <Button variant="ghost" onClick={() => scrollToSection('crap')} className="text-lg w-full">CRAP-Check</Button>
              <Button variant="ghost" onClick={() => scrollToSection('tools')} className="text-lg w-full">Tools</Button>
              <Button variant="ghost" onClick={() => scrollToSection('faq')} className="text-lg w-full">FAQ</Button>
              <Button variant="ghost" onClick={() => scrollToSection('links')} className="text-lg w-full">Links</Button>
            </div>
          )}
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Startseite */}
        <section id="start" className="mb-16 scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
              Herzlich willkommen!
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-800">
              Sie möchten mehr über Künstliche Intelligenz und ChatGPT erfahren? Wunderbar! 
              Diese Website erklärt Ihnen alles Schritt für Schritt – verständlich, sicher und ohne Fachchinesisch.
            </p>
          </div>

          <Card className="bg-green-50 border-green-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                <CheckCircle size={32} />
                Das Ziel dieser Website
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800">
              <p className="mb-4">
                Wir möchten Ihnen zeigen, wie Sie moderne Technologien wie Künstliche Intelligenz 
                und ChatGPT sicher und selbstbewusst nutzen können. Sie sind nicht zu alt für Technik – 
                im Gegenteil! Mit der richtigen Anleitung können Sie von diesen Werkzeugen profitieren.
              </p>
              <p className="font-semibold text-green-700 text-2xl">
                Du bist nicht zu alt für KI!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Schon gewusst?</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800">
              <p className="mb-4">
                <strong>Maria, 72 Jahre,</strong> nutzt ChatGPT, um Briefe zu schreiben und Rezepte zu finden. 
                Sie sagt: "Ich dachte, das wäre nichts für mich. Aber es ist wie ein kluger Nachbar, 
                der immer eine Antwort weiss."
              </p>
              <p>
                <strong>Hans, 68 Jahre,</strong> lässt sich von ChatGPT an seine Medikamente erinnern 
                und nutzt es zum Planen von Ausflügen. "Es macht sogar Spass!", meint er.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Was ist KI? */}
        <section id="ki" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 flex items-center gap-3">
            <Info size={40} />
            Was ist Künstliche Intelligenz?
          </h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Einfach erklärt</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800 space-y-4">
              <p>
                Künstliche Intelligenz – kurz <strong>KI</strong> genannt – ist eine besondere Technologie. 
                Sie ermöglicht es Computern und Programmen, selbstständig zu lernen und Aufgaben zu lösen, 
                die normalerweise menschliches Denken erfordern.
              </p>
              <p>
                Stellen Sie sich vor: KI ist wie ein kluger Nachbar, der immer eine Antwort weiss. 
                Er kann Ihnen helfen, Informationen zu finden, Texte zu schreiben oder Fragen zu beantworten.
              </p>
              <p>
                Die KI lernt aus riesigen Mengen an Informationen – ähnlich wie wir Menschen aus Erfahrungen lernen. 
                Je mehr Daten sie bekommt, desto besser wird sie.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6 bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-800">KI im Alltag – Beispiele</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800">
              <p className="mb-4">KI begegnet uns täglich, oft ohne dass wir es bemerken:</p>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li><strong>Suchmaschinen</strong> wie Google nutzen KI, um die besten Ergebnisse zu finden</li>
                <li><strong>Navigationssysteme</strong> berechnen die schnellste Route für Sie</li>
                <li><strong>Sprachassistenten</strong> wie Alexa oder Siri verstehen Ihre Fragen</li>
                <li><strong>Übersetzungsprogramme</strong> übersetzen Texte in andere Sprachen</li>
                <li><strong>E-Mail-Programme</strong> erkennen Spam und unerwünschte Nachrichten</li>
                <li><strong>Staubsauger-Roboter</strong> finden selbstständig ihren Weg durch die Wohnung</li>
                <li><strong>Moderne Kühlschränke</strong> optimieren die Temperatur automatisch</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Wichtige Begriffe</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800 space-y-4">
              <div>
                <p className="font-semibold text-blue-800 mb-2">Künstliche Intelligenz (KI)</p>
                <p>Computer und Programme, die selbstständig lernen und Aufgaben lösen können.</p>
              </div>
              <div>
                <p className="font-semibold text-blue-800 mb-2">Algorithmus</p>
                <p>Eine festgelegte Vorgehensweise, wie ein Computer Daten verarbeitet – wie ein Rezept zum Kochen.</p>
              </div>
              <div>
                <p className="font-semibold text-blue-800 mb-2">Machine Learning (Maschinelles Lernen)</p>
                <p>Computer lernen aus Erfahrungen und verbessern sich selbstständig – ähnlich wie wir Menschen.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Was ist ChatGPT? */}
        <section id="chatgpt" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 flex items-center gap-3">
            <MessageSquare size={40} />
            Was ist ChatGPT?
          </h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">ChatGPT einfach erklärt</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800 space-y-4">
              <p>
                <strong>ChatGPT</strong> ist ein Computerprogramm mit Künstlicher Intelligenz. 
                Es kann mit Ihnen wie ein Mensch sprechen – Sie stellen eine Frage, und ChatGPT antwortet.
              </p>
              <p>
                Das Besondere: ChatGPT versteht deutsche Sprache und kann Ihnen bei vielen Dingen helfen. 
                Es ist wie ein geduldiger Assistent, der immer Zeit für Sie hat.
              </p>
              <p>
                ChatGPT wurde von der Firma <strong>OpenAI</strong> entwickelt und im November 2022 veröffentlicht. 
                Millionen Menschen auf der ganzen Welt nutzen es bereits.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6 bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">Wie funktioniert ChatGPT?</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800 space-y-4">
              <p>
                ChatGPT hat aus riesigen Mengen an Texten gelernt – aus Büchern, Artikeln und Websites. 
                Dadurch kann es zu vielen Themen Antworten geben.
              </p>
              <p>
                Sie können mit ChatGPT ganz normal schreiben, als würden Sie mit einem Menschen chatten. 
                Stellen Sie Fragen, bitten Sie um Hilfe oder lassen Sie sich etwas erklären.
              </p>
              <p className="font-semibold text-green-700">
                So macht Technik Spass!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-800">Wozu kann ChatGPT helfen?</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800">
              <p className="mb-4">ChatGPT kann Sie bei vielen Aufgaben unterstützen:</p>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li><strong>Briefe und E-Mails schreiben</strong> – Sie sagen, was Sie schreiben möchten, ChatGPT formuliert es</li>
                <li><strong>Rezepte finden</strong> – "Gib mir ein einfaches Rezept für Apfelkuchen"</li>
                <li><strong>Informationen suchen</strong> – "Erkläre mir, wie das Wetter entsteht"</li>
                <li><strong>Übersetzungen</strong> – Texte in andere Sprachen übersetzen</li>
                <li><strong>Ideen sammeln</strong> – "Was kann ich meinem Enkel zum Geburtstag schenken?"</li>
                <li><strong>Erinnerungen</strong> – Listen erstellen, z.B. für Einkäufe oder Termine</li>
                <li><strong>Unterhaltung</strong> – Witze erzählen lassen oder Gedichte schreiben</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Anleitung */}
        <section id="anleitung" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 flex items-center gap-3">
            <Smartphone size={40} />
            So nutzt du ChatGPT – Schritt für Schritt
          </h2>

          <Card className="mb-6 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Wichtig zu wissen</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800">
              <p className="mb-4">
                ChatGPT ist <strong>kostenlos</strong> nutzbar! Sie brauchen nur:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Einen Computer, ein Tablet oder ein Smartphone</li>
                <li>Eine Internetverbindung</li>
                <li>Eine E-Mail-Adresse</li>
                <li>Eine Telefonnummer (für die Anmeldung)</li>
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader className="bg-blue-100">
                <CardTitle className="text-2xl text-blue-800">
                  Schritt 1: Anmeldung erstellen
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6 space-y-3">
                <p><strong>1.</strong> Öffnen Sie Ihren Internet-Browser (Chrome, Firefox, Safari oder Edge)</p>
                <p><strong>2.</strong> Geben Sie diese Adresse ein: <span className="font-mono bg-gray-100 px-2 py-1 rounded">https://chat.openai.com</span></p>
                <p><strong>3.</strong> Klicken Sie auf den Button <strong>"Sign up"</strong> (Anmelden)</p>
                <p><strong>4.</strong> Geben Sie Ihre E-Mail-Adresse ein</p>
                <p><strong>5.</strong> Wählen Sie ein Passwort (mindestens 8 Zeichen)</p>
                <p><strong>6.</strong> Geben Sie Ihre Telefonnummer ein</p>
                <p><strong>7.</strong> Sie bekommen eine SMS mit einem Code – geben Sie diesen ein</p>
                <p className="font-semibold text-green-700 pt-2">Fertig! Die Anmeldung dauert nur 1-2 Minuten.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-green-100">
                <CardTitle className="text-2xl text-green-800">
                  Schritt 2: ChatGPT nutzen
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6 space-y-3">
                <p><strong>1.</strong> Nach der Anmeldung sehen Sie ein Eingabefeld unten auf der Seite</p>
                <p><strong>2.</strong> Schreiben Sie Ihre Frage hinein, z.B.: <em>"Erkläre mir, was Künstliche Intelligenz ist"</em></p>
                <p><strong>3.</strong> Drücken Sie die Enter-Taste oder klicken Sie auf den Senden-Button</p>
                <p><strong>4.</strong> ChatGPT antwortet Ihnen in wenigen Sekunden</p>
                <p><strong>5.</strong> Sie können weiter Fragen stellen – wie in einem Gespräch</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-yellow-100">
                <CardTitle className="text-2xl text-yellow-800">
                  Schritt 3: ChatGPT am Smartphone nutzen
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6 space-y-4">
                <div>
                  <p className="font-semibold text-yellow-800 mb-2">Für Android-Handys:</p>
                  <p>Öffnen Sie den <strong>Google Play Store</strong> und suchen Sie nach <strong>"ChatGPT"</strong>. 
                  Laden Sie die offizielle App von OpenAI herunter.</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-800 mb-2">Für iPhones (iOS):</p>
                  <p>Öffnen Sie den <strong>App Store</strong> und suchen Sie nach <strong>"ChatGPT"</strong>. 
                  Laden Sie die offizielle App von OpenAI herunter.</p>
                </div>
                <p className="font-semibold text-green-700">
                  Tipp: Die App hat auch eine Sprachfunktion – Sie können mit ChatGPT sprechen!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-purple-100">
                <CardTitle className="text-2xl text-purple-800">
                  Schritt 4: ChatGPT am Computer nutzen
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6 space-y-3">
                <p>Sie können ChatGPT auch als Programm auf Ihrem Computer installieren:</p>
                <p><strong>Für Windows und Mac:</strong> Besuchen Sie <span className="font-mono bg-gray-100 px-2 py-1 rounded">https://openai.com/chatgpt/desktop/</span></p>
                <p>Laden Sie die Desktop-Version herunter und installieren Sie sie wie jedes andere Programm.</p>
                <p className="font-semibold text-purple-700">
                  Vorteil: Sie können ChatGPT mit einer Tastenkombination schnell öffnen!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Risiken */}
        <section id="risiken" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold text-red-700 mb-6 flex items-center gap-3">
            <AlertTriangle size={40} />
            Chancen & Risiken – Was Sie wissen müssen
          </h2>

          <Card className="mb-6 bg-red-50 border-red-300">
            <CardHeader>
              <CardTitle className="text-2xl text-red-800 flex items-center gap-2">
                <AlertTriangle size={28} />
                Wichtige Warnung!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800 space-y-4">
              <p className="font-semibold text-red-700 text-2xl">
                Achtung vor Betrügern!
              </p>
              <p>
                Kriminelle nutzen Künstliche Intelligenz, um Menschen zu täuschen. 
                Sie können mit KI Stimmen nachahmen, gefälschte Bilder und Videos erstellen. 
                Seien Sie vorsichtig!
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-2xl text-red-700">1. Fake-Apps erkennen</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 space-y-3">
                <p className="font-semibold text-red-600">Problem:</p>
                <p>Im App Store gibt es viele gefälschte ChatGPT-Apps, die Geld kosten oder Ihre Daten stehlen wollen.</p>
                <p className="font-semibold text-green-600 mt-4">Lösung:</p>
                <p>Laden Sie nur die <strong>offizielle App von OpenAI</strong> herunter. Achten Sie auf den Entwicklernamen "OpenAI".</p>
                <p className="bg-green-100 p-4 rounded-lg mt-4">
                  <strong>Merken Sie sich:</strong> Die echte ChatGPT-Website ist <span className="font-mono">https://chat.openai.com</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-2xl text-red-700">2. Enkeltrick mit KI</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 space-y-3">
                <p className="font-semibold text-red-600">Problem:</p>
                <p>
                  Betrüger können mit KI die Stimme Ihrer Kinder oder Enkel nachahmen. 
                  Sie rufen an und behaupten, in einer Notlage zu sein und dringend Geld zu brauchen.
                </p>
                <p className="font-semibold text-green-600 mt-4">So schützen Sie sich:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Lassen Sie sich nicht unter Druck setzen</li>
                  <li>Legen Sie auf und rufen Sie die Person unter der bekannten Nummer zurück</li>
                  <li>Vereinbaren Sie ein Codewort mit Ihrer Familie</li>
                  <li>Überweisen Sie niemals spontan Geld</li>
                  <li>Im Zweifel: Rufen Sie die Polizei (110)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-2xl text-red-700">3. Deepfake-Videos</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 space-y-3">
                <p className="font-semibold text-red-600">Problem:</p>
                <p>
                  Mit KI können Betrüger täuschend echte Videos erstellen. Prominente scheinen 
                  für dubiose Produkte zu werben oder Politiker sagen Dinge, die sie nie gesagt haben.
                </p>
                <p className="font-semibold text-green-600 mt-4">So erkennen Sie Deepfakes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Achten Sie auf unnatürliche Bewegungen oder Mimik</li>
                  <li>Prüfen Sie, ob die Lippenbewegungen zum Ton passen</li>
                  <li>Suchen Sie nach der Originalquelle des Videos</li>
                  <li>Seien Sie skeptisch bei sensationellen Inhalten</li>
                  <li>Nutzen Sie den CRAP-Check (siehe unten)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-2xl text-red-700">4. Falschinformationen</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 space-y-3">
                <p className="font-semibold text-red-600">Problem:</p>
                <p>
                  ChatGPT kann Fehler machen und falsche Informationen geben. 
                  Es "erfindet" manchmal Antworten, die plausibel klingen, aber nicht stimmen.
                </p>
                <p className="font-semibold text-green-600 mt-4">So gehen Sie damit um:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Glauben Sie nicht alles, was ChatGPT sagt</li>
                  <li>Prüfen Sie wichtige Informationen in mehreren Quellen</li>
                  <li>Nutzen Sie vertrauenswürdige Websites (siehe Linksammlung unten)</li>
                  <li>Bei medizinischen oder rechtlichen Fragen: Fragen Sie einen Fachmann</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-300">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-800">Fake-Anrufe erkennen</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 space-y-3">
                <p className="font-semibold mb-2">Typische Betrugsmaschen am Telefon:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Schockanruf:</strong> "Ihr Enkel hatte einen Unfall und braucht sofort Geld"</li>
                  <li><strong>Falsche Polizei:</strong> "Ihre Wertsachen sind in Gefahr, wir holen sie ab"</li>
                  <li><strong>Gewinnversprechen:</strong> "Sie haben gewonnen, zahlen Sie nur die Gebühr"</li>
                  <li><strong>Technischer Support:</strong> "Ihr Computer ist infiziert, wir helfen Ihnen"</li>
                </ul>
                <p className="font-semibold text-orange-700 mt-4 text-2xl">
                  Merken Sie sich: Im Zweifel auflegen!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sicherheit */}
        <section id="sicherheit" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold text-green-700 mb-6 flex items-center gap-3">
            <Shield size={40} />
            Sicher im Internet – Was du tun und nicht tun solltest
          </h2>

          <Card className="mb-6 bg-green-50 border-green-300">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">Die goldenen Regeln</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800">
              <p className="text-2xl font-semibold text-green-700 mb-4">
                Mit diesen Regeln sind Sie sicher unterwegs!
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-green-50 border-green-300">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                  <CheckCircle size={28} />
                  Das sollten Sie TUN
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                    <span>Nutzen Sie nur offizielle Websites und Apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                    <span>Prüfen Sie die Internet-Adresse (URL) genau</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                    <span>Verwenden Sie sichere Passwörter (mindestens 12 Zeichen)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                    <span>Aktualisieren Sie regelmässig Ihre Programme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                    <span>Melden Sie verdächtige Vorfälle der Polizei</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                    <span>Sprechen Sie mit Familie und Freunden über Betrugsmaschen</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-300">
              <CardHeader>
                <CardTitle className="text-2xl text-red-800 flex items-center gap-2">
                  <X size={28} />
                  Das sollten Sie NICHT tun
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <X className="text-red-600 flex-shrink-0 mt-1" size={24} />
                    <span>Geben Sie niemals Passwörter am Telefon weiter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-red-600 flex-shrink-0 mt-1" size={24} />
                    <span>Klicken Sie nicht auf Links in verdächtigen E-Mails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-red-600 flex-shrink-0 mt-1" size={24} />
                    <span>Überweisen Sie kein Geld an Unbekannte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-red-600 flex-shrink-0 mt-1" size={24} />
                    <span>Teilen Sie keine persönlichen Daten in sozialen Medien</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-red-600 flex-shrink-0 mt-1" size={24} />
                    <span>Lassen Sie sich nicht unter Druck setzen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-red-600 flex-shrink-0 mt-1" size={24} />
                    <span>Installieren Sie keine Programme von unbekannten Quellen</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-blue-50 border-blue-300">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Sichere Passwörter erstellen</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800 space-y-3">
              <p className="font-semibold">Ein gutes Passwort hat:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Mindestens 12 Zeichen</li>
                <li>Gross- und Kleinbuchstaben</li>
                <li>Zahlen</li>
                <li>Sonderzeichen (!, ?, #, etc.)</li>
              </ul>
              <p className="font-semibold mt-4">Tipp: Merksatz verwenden</p>
              <p>
                Beispiel: "Ich trinke jeden Morgen um 7 Uhr 2 Tassen Kaffee!" 
                wird zu: <span className="font-mono bg-gray-100 px-2 py-1 rounded">ItjMu7U2TK!</span>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CRAP-Check */}
        <section id="crap" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold text-purple-700 mb-6 flex items-center gap-3">
            <CheckCircle size={40} />
            Der CRAP-Check – Informationen prüfen
          </h2>

          <Card className="mb-6 bg-purple-50 border-purple-300">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">Was ist der CRAP-Check?</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800 space-y-4">
              <p>
                Der CRAP-Check ist eine einfache Methode, um zu prüfen, ob eine Information vertrauenswürdig ist. 
                CRAP steht für vier wichtige Fragen, die Sie sich stellen sollten.
              </p>
              <p className="font-semibold text-purple-700 text-2xl">
                Mit dem CRAP-Check erkennen Sie Falschinformationen!
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-purple-200">
              <CardHeader className="bg-purple-100">
                <CardTitle className="text-2xl text-purple-800">
                  C = Currency (Aktualität)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6 space-y-3">
                <p className="font-semibold text-purple-700">Fragen Sie sich:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Wann wurde die Information veröffentlicht?</li>
                  <li>Ist die Information noch aktuell?</li>
                  <li>Gibt es neuere Informationen zum Thema?</li>
                </ul>
                <p className="bg-purple-50 p-4 rounded-lg mt-4">
                  <strong>Beispiel:</strong> Ein Artikel über Corona-Regeln von 2020 ist heute nicht mehr aktuell.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader className="bg-blue-100">
                <CardTitle className="text-2xl text-blue-800">
                  R = Reliability (Verlässlichkeit)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6 space-y-3">
                <p className="font-semibold text-blue-700">Fragen Sie sich:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Werden Quellen genannt?</li>
                  <li>Gibt es Belege für die Aussagen?</li>
                  <li>Können Sie die Informationen woanders bestätigen?</li>
                  <li>Ist die Sprache sachlich oder emotional?</li>
                </ul>
                <p className="bg-blue-50 p-4 rounded-lg mt-4">
                  <strong>Warnung:</strong> Seien Sie skeptisch bei reisserischen Überschriften wie "Unglaublich!" oder "Geheim!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader className="bg-green-100">
                <CardTitle className="text-2xl text-green-800">
                  A = Authority (Autorität)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6 space-y-3">
                <p className="font-semibold text-green-700">Fragen Sie sich:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Wer hat die Information geschrieben?</li>
                  <li>Ist der Autor ein Experte auf dem Gebiet?</li>
                  <li>Ist die Website seriös und bekannt?</li>
                  <li>Gibt es ein Impressum mit Kontaktdaten?</li>
                </ul>
                <p className="bg-green-50 p-4 rounded-lg mt-4">
                  <strong>Vertrauenswürdig sind:</strong> Offizielle Behörden, Universitäten, etablierte Medien, Fachorganisationen
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader className="bg-yellow-100">
                <CardTitle className="text-2xl text-yellow-800">
                  P = Purpose (Zweck)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6 space-y-3">
                <p className="font-semibold text-yellow-700">Fragen Sie sich:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Warum wurde diese Information veröffentlicht?</li>
                  <li>Will jemand etwas verkaufen?</li>
                  <li>Soll ich eine bestimmte Meinung übernehmen?</li>
                  <li>Wird Werbung für ein Produkt gemacht?</li>
                </ul>
                <p className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <strong>Achtung:</strong> Manche Websites sehen aus wie Nachrichten, sind aber versteckte Werbung!
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-green-50 border-green-300">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">Zusammenfassung: So nutzen Sie den CRAP-Check</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800 space-y-3">
              <p>Wenn Sie eine Information im Internet finden, stellen Sie sich diese vier Fragen:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4 font-semibold">
                <li>Ist die Information aktuell? (Currency)</li>
                <li>Ist die Information verlässlich? (Reliability)</li>
                <li>Wer hat die Information geschrieben? (Authority)</li>
                <li>Warum wurde sie geschrieben? (Purpose)</li>
              </ol>
              <p className="font-semibold text-green-700 text-2xl mt-4">
                Wenn Sie bei allen vier Punkten "Ja, das stimmt" sagen können, ist die Information wahrscheinlich vertrauenswürdig!
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Tools */}
        <section id="tools" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 flex items-center gap-3">
            <Wrench size={40} />
            Hilfreiche Tools – Perplexity und NotebookLM
          </h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Weitere nützliche KI-Werkzeuge</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800 space-y-4">
              <p>
                Neben ChatGPT gibt es noch andere hilfreiche KI-Werkzeuge. 
                Hier stellen wir Ihnen zwei besonders nützliche vor.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-100">
                <CardTitle className="text-2xl text-blue-800">Perplexity – Die KI-Suchmaschine</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6 space-y-4">
                <p className="font-semibold text-blue-700">Was ist Perplexity?</p>
                <p>
                  Perplexity ist eine Suchmaschine mit Künstlicher Intelligenz. 
                  Der grosse Unterschied zu Google: Perplexity gibt Ihnen direkt eine Antwort 
                  und zeigt die Quellen an, aus denen die Information stammt.
                </p>
                
                <p className="font-semibold text-blue-700 mt-4">Vorteile:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Aktuelle Informationen aus dem Internet</li>
                  <li>Zeigt Quellen für jede Aussage</li>
                  <li>Fasst komplexe Themen verständlich zusammen</li>
                  <li>Kostenlos nutzbar</li>
                </ul>

                <p className="font-semibold text-blue-700 mt-4">So nutzen Sie Perplexity:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Besuchen Sie <span className="font-mono bg-gray-100 px-2 py-1 rounded">https://www.perplexity.ai</span></li>
                  <li>Stellen Sie Ihre Frage in deutscher Sprache</li>
                  <li>Perplexity sucht im Internet und gibt Ihnen eine Antwort mit Quellenangaben</li>
                </ol>

                <p className="bg-blue-50 p-4 rounded-lg mt-4">
                  <strong>Beispiel:</strong> "Was sind die aktuellen Wetterwarnungen für meine Region?" 
                  – Perplexity sucht nach aktuellen Informationen und zeigt Ihnen die Quellen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="bg-green-100">
                <CardTitle className="text-2xl text-green-800">NotebookLM – Ihr persönlicher Recherche-Assistent</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6 space-y-4">
                <p className="font-semibold text-green-700">Was ist NotebookLM?</p>
                <p>
                  NotebookLM ist ein KI-Werkzeug von Google. Es hilft Ihnen, eigene Dokumente, 
                  Artikel oder Notizen zu verstehen und zusammenzufassen.
                </p>
                
                <p className="font-semibold text-green-700 mt-4">Vorteile:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fasst lange Texte zusammen</li>
                  <li>Beantwortet Fragen zu Ihren eigenen Dokumenten</li>
                  <li>Erstellt Notizen und Zusammenfassungen</li>
                  <li>Kostenlos nutzbar mit Google-Konto</li>
                </ul>

                <p className="font-semibold text-green-700 mt-4">So nutzen Sie NotebookLM:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Besuchen Sie <span className="font-mono bg-gray-100 px-2 py-1 rounded">https://notebooklm.google.com</span></li>
                  <li>Melden Sie sich mit Ihrem Google-Konto an</li>
                  <li>Laden Sie ein Dokument hoch (z.B. einen Arztbrief oder eine Bedienungsanleitung)</li>
                  <li>Stellen Sie Fragen zum Dokument</li>
                </ol>

                <p className="bg-green-50 p-4 rounded-lg mt-4">
                  <strong>Beispiel:</strong> Sie haben einen langen Arztbrief bekommen. 
                  Laden Sie ihn in NotebookLM hoch und fragen Sie: "Fasse die wichtigsten Punkte zusammen" 
                  oder "Was bedeutet dieser medizinische Begriff?"
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-yellow-50 border-yellow-300">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-800">Welches Tool für welchen Zweck?</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800">
              <ul className="space-y-3">
                <li><strong>ChatGPT:</strong> Allgemeine Fragen, Texte schreiben, Ideen sammeln</li>
                <li><strong>Perplexity:</strong> Aktuelle Informationen suchen, Recherche mit Quellenangaben</li>
                <li><strong>NotebookLM:</strong> Eigene Dokumente verstehen und zusammenfassen</li>
              </ul>
              <p className="font-semibold text-yellow-700 mt-4">
                Tipp: Probieren Sie alle drei aus und finden Sie heraus, welches Ihnen am besten gefällt!
              </p>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 flex items-center gap-3">
            <HelpCircle size={40} />
            Häufige Fragen & Antworten
          </h2>

          <div className="space-y-4">
            <Card>
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-2xl text-blue-800">Kostet ChatGPT etwas?</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6">
                <p>
                  <strong>Nein, ChatGPT ist kostenlos!</strong> Es gibt eine kostenlose Version, 
                  die für die meisten Zwecke völlig ausreichend ist. Es gibt auch eine kostenpflichtige 
                  Version (ChatGPT Plus) mit zusätzlichen Funktionen, aber die ist nicht notwendig.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-green-50">
                <CardTitle className="text-2xl text-green-800">Ist ChatGPT gefährlich?</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6">
                <p>
                  <strong>Nein, ChatGPT selbst ist nicht gefährlich.</strong> Es ist ein Werkzeug, 
                  wie ein Hammer oder ein Auto. Wichtig ist, dass Sie es richtig nutzen und die Sicherheitsregeln 
                  beachten (siehe oben). Geben Sie keine persönlichen Daten wie Passwörter oder Bankdaten ein.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-2xl text-yellow-800">Brauche ich besondere Computerkenntnisse?</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6">
                <p>
                  <strong>Nein!</strong> Wenn Sie im Internet surfen und E-Mails schreiben können, 
                  können Sie auch ChatGPT nutzen. Es ist so einfach wie eine Google-Suche – 
                  Sie tippen eine Frage ein und bekommen eine Antwort.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-2xl text-purple-800">Kann ChatGPT meine Daten stehlen?</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6">
                <p>
                  <strong>Nein, aber seien Sie vorsichtig:</strong> ChatGPT speichert Ihre Gespräche, 
                  um besser zu werden. Geben Sie deshalb keine persönlichen Informationen wie Ihren Namen, 
                  Ihre Adresse, Telefonnummer, Passwörter oder Bankdaten ein.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-red-50">
                <CardTitle className="text-2xl text-red-800">Was mache ich, wenn ich einen Betrugsversuch erkenne?</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6 space-y-3">
                <p><strong>Sofort handeln:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Legen Sie auf oder schliessen Sie die Website</li>
                  <li>Geben Sie keine Daten ein und überweisen Sie kein Geld</li>
                  <li>Rufen Sie die Polizei: <strong className="text-2xl">110</strong></li>
                  <li>Informieren Sie Ihre Familie</li>
                  <li>Erstatten Sie Anzeige bei der Polizei</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-2xl text-orange-800">Kann ich ChatGPT auch auf Schweizerdeutsch nutzen?</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6">
                <p>
                  <strong>Ja, teilweise.</strong> ChatGPT versteht auch Schweizerdeutsch, 
                  aber die Antworten sind meistens auf Hochdeutsch. Sie können aber auf Schweizerdeutsch 
                  schreiben und ChatGPT wird Sie verstehen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-teal-50">
                <CardTitle className="text-2xl text-teal-800">Bin ich zu alt für KI und ChatGPT?</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6">
                <p className="text-2xl font-semibold text-teal-700 mb-4">
                  Nein, niemals!
                </p>
                <p>
                  Alter spielt keine Rolle. Viele Menschen über 70 nutzen ChatGPT täglich und sind begeistert. 
                  Es ist nie zu spät, etwas Neues zu lernen. Und mit dieser Anleitung haben Sie alles, 
                  was Sie brauchen!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-pink-50">
                <CardTitle className="text-2xl text-pink-800">Wo bekomme ich Hilfe, wenn ich nicht weiterkomme?</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6 space-y-3">
                <p><strong>Hilfe finden Sie hier:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fragen Sie Ihre Familie oder Freunde</li>
                  <li>Besuchen Sie einen Computerkurs für Senioren (z.B. bei der Volkshochschule)</li>
                  <li>Nutzen Sie die Beratung von Digital-Kompass.de</li>
                  <li>Rufen Sie die Verbraucherzentrale an</li>
                  <li>Besuchen Sie ein Seniorenbüro in Ihrer Nähe</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Linksammlung */}
        <section id="links" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 flex items-center gap-3">
            <LinkIcon size={40} />
            Linksammlung – Vertrauenswürdige Websites
          </h2>

          <Card className="mb-6 bg-blue-50 border-blue-300">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Offizielle und vertrauenswürdige Quellen</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800">
              <p>
                Hier finden Sie eine Sammlung seriöser deutschsprachiger Websites, 
                auf denen Sie weitere Informationen finden können.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader className="bg-green-100">
                <CardTitle className="text-2xl text-green-800">KI und ChatGPT</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6 space-y-3">
                <div>
                  <p className="font-semibold text-green-700">ChatGPT (offizielle Website)</p>
                  <p className="font-mono bg-gray-100 px-2 py-1 rounded inline-block">https://chat.openai.com</p>
                  <p className="text-lg mt-1">Die offizielle ChatGPT-Website von OpenAI</p>
                </div>
                <div>
                  <p className="font-semibold text-green-700">Malteser – KI verständlich erklärt</p>
                  <p className="font-mono bg-gray-100 px-2 py-1 rounded inline-block text-sm">https://www.malteser.de/dabei/it-technik/kuenstliche-intelligenz-verstaendlich-erklaert.html</p>
                  <p className="text-lg mt-1">Einfache Erklärungen zu KI für Senioren</p>
                </div>
                <div>
                  <p className="font-semibold text-green-700">Digital-Kompass</p>
                  <p className="font-mono bg-gray-100 px-2 py-1 rounded inline-block">https://www.digital-kompass.de</p>
                  <p className="text-lg mt-1">Digitale Angebote für ältere Menschen</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-red-100">
                <CardTitle className="text-2xl text-red-800">Sicherheit und Betrugsschutz</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6 space-y-3">
                <div>
                  <p className="font-semibold text-red-700">Polizei-Beratung</p>
                  <p className="font-mono bg-gray-100 px-2 py-1 rounded inline-block">https://www.polizei-beratung.de</p>
                  <p className="text-lg mt-1">Offizielle Informationen der Polizei zu Betrugsmaschen</p>
                </div>
                <div>
                  <p className="font-semibold text-red-700">Verbraucherzentrale</p>
                  <p className="font-mono bg-gray-100 px-2 py-1 rounded inline-block">https://www.verbraucherzentrale.de</p>
                  <p className="text-lg mt-1">Verbraucherschutz und Beratung</p>
                </div>
                <div>
                  <p className="font-semibold text-red-700">BSI für Bürger</p>
                  <p className="font-mono bg-gray-100 px-2 py-1 rounded inline-block">https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/verbraucherinnen-und-verbraucher_node.html</p>
                  <p className="text-lg mt-1">Bundesamt für Sicherheit in der Informationstechnik</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-yellow-100">
                <CardTitle className="text-2xl text-yellow-800">Weitere hilfreiche Tools</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6 space-y-3">
                <div>
                  <p className="font-semibold text-yellow-700">Perplexity</p>
                  <p className="font-mono bg-gray-100 px-2 py-1 rounded inline-block">https://www.perplexity.ai</p>
                  <p className="text-lg mt-1">KI-Suchmaschine mit Quellenangaben</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-700">NotebookLM</p>
                  <p className="font-mono bg-gray-100 px-2 py-1 rounded inline-block">https://notebooklm.google.com</p>
                  <p className="text-lg mt-1">Google's KI-Recherche-Assistent</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-purple-100">
                <CardTitle className="text-2xl text-purple-800">Bildung und Kurse</CardTitle>
              </CardHeader>
              <CardContent className="text-xl leading-relaxed text-gray-800 pt-6 space-y-3">
                <div>
                  <p className="font-semibold text-purple-700">Volkshochschulen</p>
                  <p className="font-mono bg-gray-100 px-2 py-1 rounded inline-block">https://www.vhs.de</p>
                  <p className="text-lg mt-1">Computerkurse für Senioren in Ihrer Nähe</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-700">BAGSO – Bundesarbeitsgemeinschaft der Seniorenorganisationen</p>
                  <p className="font-mono bg-gray-100 px-2 py-1 rounded inline-block">https://www.bagso.de</p>
                  <p className="text-lg mt-1">Projekte und Informationen für Senioren</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-orange-50 border-orange-300">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-800">Wichtiger Hinweis</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800">
              <p>
                Alle hier aufgeführten Websites sind seriös und vertrauenswürdig. 
                Achten Sie beim Besuch darauf, dass die Internetadresse (URL) genau übereinstimmt. 
                Betrüger erstellen manchmal gefälschte Websites mit ähnlichen Namen!
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Abschluss */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-100 to-green-100 border-blue-300">
            <CardHeader>
              <CardTitle className="text-3xl text-blue-800 text-center">Sie haben es geschafft!</CardTitle>
            </CardHeader>
            <CardContent className="text-xl leading-relaxed text-gray-800 text-center space-y-4">
              <p className="text-2xl font-semibold text-blue-700">
                Herzlichen Glückwunsch! Sie wissen jetzt, wie Sie KI und ChatGPT sicher nutzen können.
              </p>
              <p>
                Denken Sie daran: Es ist nie zu spät, etwas Neues zu lernen. 
                Probieren Sie es aus, haben Sie keine Angst vor Fehlern, und vor allem: Haben Sie Spass dabei!
              </p>
              <p className="text-2xl font-bold text-green-700">
                Du bist nicht zu alt für KI – Du bist genau richtig! 🌟
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl mb-4">
            Diese Website wurde erstellt, um Senioren den sicheren Umgang mit KI zu ermöglichen.
          </p>
          <p className="text-lg">
            Erstellt von Roger Basler de Roca – November 2025
          </p>
          <p className="text-lg mt-4">
            Bei Fragen oder Problemen wenden Sie sich an Ihre Familie, Freunde oder lokale Beratungsstellen.
          </p>
        </div>
      </footer>
    </div>
  );
}
