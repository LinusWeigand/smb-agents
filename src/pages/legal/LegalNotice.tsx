import { AddressBlock, H2, H3, LegalLayout, P, Rule } from '../../components/legal/LegalLayout';
import { useSeo } from '../../lib/useSeo';
import { siteUrl } from '../../lib/site';

/** Impressum — § 5 TMG disclosure. Text carried over verbatim; do not reword. */
export default function LegalNotice() {
  useSeo({
    title: 'Impressum - Neuroneus',
    description: 'Impressum und Anbieterkennzeichnung gemäß § 5 TMG.',
    canonical: siteUrl('/impressum'),
  });

  return (
    <LegalLayout title="Impressum">
      <H2>Angaben gemäß § 5 TMG</H2>
      <AddressBlock lines={['CouchTec Software GmbH', 'Auenstraße 14', '80469 München']} />

      <Rule />

      <H2>Vertreten durch:</H2>
      <P>Harald Kisch</P>

      <Rule />

      <H2>Kontakt:</H2>
      <P>Telefon: 0176 56585838</P>
      <P>
        E-Mail:{' '}
        <a className="underline hover:text-[#171717]" href="mailto:harald@couchtec.com">
          harald@couchtec.com
        </a>
      </P>

      <Rule />

      <H2>Registereintrag:</H2>
      <P>Eintragung im Handelsregister.</P>
      <P>Registergericht: München</P>
      <P>Registernummer: HRB 237272</P>

      <Rule />

      <H2>Umsatzsteuer-ID:</H2>
      <P>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
      </P>
      <P>DE316911650</P>

      <Rule />

      <H2>Haftungsausschluss (Disclaimer)</H2>

      <H3>Haftung für Inhalte</H3>
      <P>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
        den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
        jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
        oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
        allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
        ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
        von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </P>

      <H3>Haftung für Links</H3>
      <P>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
        Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
        Seiten verantwortlich.
      </P>

      <H3>Urheberrecht</H3>
      <P>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
        des jeweiligen Autors bzw. Erstellers.
      </P>

      <H3>EU-Streitschlichtung</H3>
      <P>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
        <a
          className="underline hover:text-[#171717]"
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr
        </a>{' '}
        .
        <br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </P>

      <H3>Verbraucherstreitbeilegung/Universalschlichtungsstelle</H3>
      <P>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </P>
    </LegalLayout>
  );
}
