import { AddressBlock, H2, H3, LegalLayout, List, P, Rule } from '../../components/legal/LegalLayout';
import { useSeo } from '../../lib/useSeo';
import { siteUrl } from '../../lib/site';

/** Datenschutzerklärung. Text carried over verbatim; do not reword. */
export default function PrivacyPolicy() {
  useSeo({
    title: 'Datenschutzerklärung - Orakis',
    description:
      'Datenschutzerklärung: welche personenbezogenen Daten wir erheben, auf welcher Rechtsgrundlage und welche Rechte Sie als Betroffener haben.',
    canonical: siteUrl('/datenschutz'),
  });

  return (
    <LegalLayout title="Datenschutzerklärung">
      <H2>1. Datenschutz auf einen Blick</H2>

      <H3>Allgemeine Hinweise</H3>
      <P>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
        personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
        sind alle Daten, mit denen Sie persönlich identifiziert werden können.
      </P>

      <H3>Verantwortliche Stelle</H3>
      <P>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</P>
      <AddressBlock
        lines={[
          'CouchTec GmbH',
          'Auenstraße 14',
          '80469 München',
          'Telefon: 0176 56585838',
          'E-Mail: harald@couchtec.com',
        ]}
      />
      <P>
        Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
        mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
        Namen, E-Mail-Adressen o. Ä.) entscheidet.
      </P>

      <Rule />

      <H2>2. Ihre Rechte als Betroffener</H2>
      <P>
        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
        unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
        Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung
        oder Löschung dieser Daten. Sie haben zudem das Recht auf Einschränkung der Verarbeitung und
        ein Widerspruchsrecht gegen die Verarbeitung sowie das Recht auf Datenübertragbarkeit.
      </P>
      <P>
        Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit
        an uns wenden.
      </P>
      <P>
        Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
        Ihrer personenbezogenen Daten durch uns zu beschweren.
      </P>

      <H3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</H3>
      <P>
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
        können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis
        zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
      </P>

      <Rule />

      <H2>3. Datenerfassung auf dieser Website</H2>

      <H3>Cookies</H3>
      <P>
        Unsere Internetseite verwendet so genannte „Cookies“. Cookies sind kleine Textdateien und
        richten auf Ihrem Endgerät keinen Schaden an.
      </P>
      <P>
        Wir verwenden ein technisch notwendiges Cookie, das nach erfolgreicher Anmeldung gesetzt
        wird (Authentifizierungs-Cookie). Dieses Cookie ist erforderlich, um Ihren Login-Status
        während der Sitzung aufrechtzuerhalten. Die Verarbeitung erfolgt auf Grundlage von Art. 6
        Abs. 1 lit. f DSGVO, da ein berechtigtes Interesse an der Speicherung von Cookies zur
        technisch fehlerfreien und optimierten Bereitstellung der Login-Funktion besteht. Dieses
        Cookie wird in der Regel gelöscht, wenn Sie sich ausloggen oder Ihren Browser schließen
        (Session-Cookie).
      </P>

      <H3>Server-Log-Dateien</H3>
      <P>
        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
        Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
      </P>
      <List
        items={[
          'Browsertyp und Browserversion',
          'verwendetes Betriebssystem',
          'Referrer URL',
          'Hostname des zugreifenden Rechners',
          'Uhrzeit der Serveranfrage',
          'IP-Adresse',
        ]}
      />
      <P>
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
        Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
        Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung
        und der Sicherheit seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
      </P>

      <H3>Kontaktformular und Kalenderfunktion</H3>
      <P>
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
        Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail,
        Nachricht) sowie der gewählte Tag und die Uhrzeit zwecks Bearbeitung der Anfrage und für den
        Fall von Anschlussfragen bei uns gespeichert. Diese Daten werden per E-Mail an uns
        weitergeleitet.
      </P>
      <P>
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
        Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
        vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
        auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
        Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
      </P>
      <P>
        Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
        Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
        Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende
        gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
      </P>

      <H3>Registrierung auf dieser Website</H3>
      <P>
        Sie können sich auf dieser Website registrieren, um zusätzliche Funktionen auf der Seite zu
        nutzen. Die dazu eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen
        Angebotes oder Dienstes, für den Sie sich registriert haben. Die bei der Registrierung
        abgefragten Pflichtangaben müssen vollständig angegeben werden. Andernfalls werden wir die
        Registrierung ablehnen.
      </P>
      <P>
        Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt zum Zwecke der
        Durchführung des durch die Registrierung begründeten Nutzungsverhältnisses und ggf. zur
        Anbahnung weiterer Verträge (Art. 6 Abs. 1 lit. b DSGVO).
      </P>
      <P>
        Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf
        unserer Website registriert sind und werden anschließend gelöscht. Gesetzliche
        Aufbewahrungsfristen bleiben unberührt.
      </P>

      <Rule />

      <H2>4. Datensicherheit</H2>
      <P>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
        Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
        senden, eine SSL- bzw. TLS-Verschlüsselung.
      </P>
    </LegalLayout>
  );
}
