import { H2, LegalLayout, P, Rule } from '../../components/legal/LegalLayout';
import { useSeo } from '../../lib/useSeo';
import { siteUrl } from '../../lib/site';

/** AGB. Text carried over verbatim; do not reword. */
export default function TermsOfService() {
  useSeo({
    title: 'AGB - Neuroneus',
    description:
      'Allgemeine Geschäftsbedingungen: Geltungsbereich, Leistungen, Nutzerkonto, Pflichten, Haftung und Schlussbestimmungen.',
    canonical: siteUrl('/agb'),
  });

  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen (AGB) der CouchTec GmbH">
      <H2>§ 1 Geltungsbereich</H2>
      <P>
        (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der von der CouchTec
        GmbH, Auenstraße 14, 80469 München (nachfolgend "Anbieter") betriebenen Webseite und aller
        damit verbundenen Dienste.
      </P>
      <P>
        (2) Mit der Nutzung der Webseite oder der Registrierung eines Nutzerkontos erklärt sich der
        Nutzer mit diesen AGB einverstanden.
      </P>

      <Rule />

      <H2>§ 2 Vertragsgegenstand und Leistungen</H2>
      <P>(1) Der Anbieter betreibt eine Webseite zur Lead-Generierung und Unternehmenspräsentation.</P>
      <P>
        (2) Nutzern wird die Möglichkeit geboten, ein Nutzerkonto zu erstellen. Die Registrierung und
        die Grundfunktionen des Nutzerkontos sind unentgeltlich.
      </P>
      <P>
        (3) Der Anbieter stellt ein Kontaktformular zur Verfügung, über das Nutzer Anfragen stellen
        und Terminvorschläge unterbreiten können.
      </P>

      <Rule />

      <H2>§ 3 Registrierung und Nutzerkonto</H2>
      <P>
        (1) Der Nutzer ist verpflichtet, bei der Registrierung wahrheitsgemäße und vollständige
        Angaben zu machen und seine Daten stets aktuell zu halten.
      </P>
      <P>
        (2) Der Nutzer ist für die Geheimhaltung seiner Zugangsdaten (Benutzername, Passwort) selbst
        verantwortlich. Eine Weitergabe an Dritte ist nicht gestattet.
      </P>
      <P>
        (3) Der Anbieter behält sich das Recht vor, Nutzerkonten bei Verstößen gegen diese AGB, bei
        Angabe falscher Daten oder bei Missbrauch der Plattform ohne Angabe von Gründen zu sperren
        oder zu löschen.
      </P>

      <Rule />

      <H2>§ 4 Pflichten des Nutzers</H2>
      <P>
        (1) Der Nutzer verpflichtet sich, die Dienste des Anbieters nicht für rechtswidrige Zwecke
        zu missbrauchen.
      </P>
      <P>
        (2) Es ist dem Nutzer untersagt, Handlungen vorzunehmen, die die Funktionsfähigkeit der
        Webseite beeinträchtigen könnten (z.B. durch den Einsatz von Viren, Malware oder Skripten).
      </P>

      <Rule />

      <H2>§ 5 Haftung</H2>
      <P>(1) Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit.</P>
      <P>
        (2) Für einfache Fahrlässigkeit haftet der Anbieter – außer im Falle der Verletzung des
        Lebens, des Körpers oder der Gesundheit – nur, sofern wesentliche Vertragspflichten
        (Kardinalpflichten) verletzt werden. Die Haftung ist begrenzt auf den vertragstypischen,
        vorhersehbaren Schaden.
      </P>
      <P>
        (3) Die Haftung für mittelbare und unvorhersehbare Schäden, Produktions- und Nutzungsausfall,
        entgangenen Gewinn, ausgebliebene Einsparungen und Vermögensschäden wegen Ansprüchen
        Dritter, ist im Falle einfacher Fahrlässigkeit – außer im Falle der Verletzung des Lebens,
        des Körpers oder der Gesundheit – ausgeschlossen.
      </P>
      <P>
        (4) Eine weitergehende Haftung als in diesem Vertrag vorgesehen ist – ohne Rücksicht auf die
        Rechtsnatur des geltend gemachten Anspruchs – ausgeschlossen. Die vorstehenden
        Haftungsbeschränkungen bzw. -ausschlüsse gelten jedoch nicht für eine gesetzlich zwingend
        vorgeschriebene verschuldensunabhängige Haftung (z. B. gemäß Produkthaftungsgesetz).
      </P>

      <Rule />

      <H2>§ 6 Datenschutz</H2>
      <P>
        Hinsichtlich des Datenschutzes wird auf die gesonderte Datenschutzerklärung des Anbieters
        verwiesen, die integraler Bestandteil dieser AGB ist.
      </P>

      <Rule />

      <H2>§ 7 Schlussbestimmungen</H2>
      <P>(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</P>
      <P>
        (2) Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis zwischen dem Nutzer und
        dem Anbieter ist der Sitz des Anbieters, sofern es sich bei dem Nutzer um einen Kaufmann,
        eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches
        Sondervermögen handelt.
      </P>
      <P>
        (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so wird hierdurch
        die Gültigkeit der übrigen Bestimmungen nicht berührt.
      </P>
    </LegalLayout>
  );
}
