import React, { useState } from "react";

// images
import kengur from "../../../sass/images/kengur.jpg";

const BlogPost = () => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });
  return (
    <div className="blogPost">
      {reset}
      <h1 className="blogPost__h1">DA LI JE AUSTRALIJA NOVA OBEĆANA ZEMLJA?</h1>
      <span className="blogPost__span">
        Beskrajan, plavi krug. U njemu, zvezda.
      </span>
      <div className="blogPost__info">
        <p className="blogPost__date">25. jun 2019.</p>
        <p className="blogPost__postedBy">
          <span>Postovala:</span> Branka
        </p>
      </div>
      <div className="blogPost__content">
        <p className="blogPost__content__p">
          <i>
            Da li je san o izobilju, boljem životu i srećnim ljudima moguće
            ostvariti samo u Americi ili svoj američki san možete da doživite i
            na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?
          </i>
        </p>
        <h2 className="blogPost__h2">
          Ovaj tekst je namenjen onima koji razmišljaju o odlasku iz Srbije i
          pitaju se kuda dalje.
        </h2>
        <img className="blogPost__img" src={kengur} alt="proenglish" />
        <p className="blogPost__content__p">
          Početak dvadesetog veka su obeležila velika pomeranja evropskih naroda
          u Ameriku: nekadašnja britanska kolonija otvorila je tada vrata
          hiljadama ljudi - čak 9% stanovništva Norveške je pošlo put Amerike u
          kojoj u ovom trenutku živi 40 miliona stranaca. Na čuveno ostrvo Elis
          sa još poznatijim Kipom slobode (Lady Liberty), pravo na njujorško tle
          su se iskrcali čuveni bezdomnici - u stvari raseljena lica i
          kosmopolite - poput Alberta Ajnštajna (iz Austrije), Levija Štrausa
          (iz Nemačke, tvorac čuvenih levis farmerki),Vladimira Nabokova (iz
          Rusije), Oskara de la Rente (iz Dominikanske Republike) i naših Nikole
          Tesle, Milutina Milankovića, Mihajla Pupina. Došli su i ostali kako bi
          ostvarili svoj američki san - i uspeli su u tome. Njihove životne
          priče i dan danas inspirišu ljude i hrabre ih da se upuste u avanturu
          ostvarivanja svojih snova. Medjutim, kuda sada idu Evropljani?
        </p>
        <p className="blogPost__content__p">
          Nama koji potičemo sa Balkana seobe su dobro poznate još iz vremena
          Čarnojevića koji su naše pretke poveli iz područja Kosmeta i Metohije
          ka plodnoj Vojvodini i zelenoj Šumadiji za vreme istorijskih
          previranja. Danas živimo u miru i uvek težimo ka boljem i želimo više.
          Mišljenja su različita: oni koji ostaju tumače odlazak kao pametan
          potez, izdaju otadžbine ili uzaludan pokušaj: čovek od sebe ne može
          pobeći i sve svoje probleme nosi sa sobom; s druge strane, oni koji su
          otišli srećni su, uglavnom, jer su se skućili i konačno žive punim
          plućima. Oni koji se tek spremaju da odu, na najvećim su mukama.
        </p>
        <p className="blogPost__content__p">
          Prema novijim podacima, oko 2 miliona Srba su naseljeni trajno u
          različitim zemljama sveta. U tu brojku nisu uračunati oni koji u
          inostranstvu borave privremeno, preko radne vize, niti su tom cifrom
          obuhvaćeni studenti. Prosečna starost onih koji su otišli je 34,7
          godina, dok je prosečna starost stanovništva u Srbiji 42,2 godine.
          Poredjenja radi, procenjeno je da u Srbiji živi oko 6 miliona ljudi,
          dok se 2 miliona nalazi u Beogradu. To znači da je godinama unazad
          Srbiju napustio ceo jedan Beograd. Slična situacija sa odlascima je i
          u drugim zemljama bivše Jugoslavije. Medju jačim dijasporama bivših
          jugoslovenskih zemalja je ona u Australiji koja broji preko 200.000
          Srba, 50.000 onih koji su u Australiju došli iz Bosne i Hercegovine,
          kao i preko 100.000 Hrvata. Sve više je onih koji se opredeljuju za
          odlazak u Australiju. Zašto je to slučaj?
        </p>
        <h3 className="blogPost__h3">
          1. Gradovi sa visokim kvalitetom života
        </h3>
        <p className="blogPost__content__p">
          Prema istraživanju koje obradjuje faktore koji doprinose kvalitetu
          života, a koje obuhvata 140 svetskih gradova, australijski gradovi se
          nalaze medju 10 najboljih za život. Medju njima se nalaze Sidnej i
          Adelajd, a pri vrhu liste godinama unazad stoji Melburn zahvaljujući
          najvišim ocenama u oblasti zdravstva, obrazovanja i infrastrukture.
          Regionalna Australija poslednjih godina doživljava procvat
          zahvaljujući velikim ulaganjima koja za cilj imaju iskorišćavanje
          punog potencijala i bogatstva Australije.
        </p>
        <h3 className="blogPost__h3">2. Zarada</h3>
        <p className="blogPost__content__p">
          Ekonomska kriza koja je prodrmala Evropu i Ameriku zaobišla je
          Australiju. Zapravo, u poslednjih nekoliko godina Australija je
          ostvarila ekonomski rast i A kreditni rejting, kao i nizak državni
          dug. Troškovi života su veći nego u Srbiji, ali prosečna mesečna
          zarada je preko 4000 evra, što je dovoljno za normalan život. Uzmite u
          obzir i to da će svaki radno sposoban član porodice moći da se zaposli
          i ostvari mesečni prihod na sličnom nivou.
        </p>
        <h3 className="blogPost__h3">3. Niska stopa nezaposlenosti</h3>
        <p className="blogPost__content__p">
          Australija je u potrazi za kvalifikovanom i vrednom radnom snagom koja
          zemlji omogućava da parira drugim svetskim silama. Pod uslovom da
          imate potrebno obrazovanje, znanje i/ili iskustvo, potraga za poslom u
          Australiji traje kratko bez obzira na vašu struku: posla ima i za one
          koji rade fizičke poslove, kao i za visokokvalifikovane radnike iz
          sektora kao što su medicina ili inženjerstvo. Australija je poznata po
          svojoj otvorenosti prema drugim narodima i rado prihvata različitost.
          Multikulturalnost je ponos Australije i njena lepota se ogleda u
          bogatom kulturnom životu, hrani, običajima i festivalima koje
          organizuje preko 270 nacija koje žive u Australiji. Zapravo, svaki
          četvrti Australijanac je rodjen van Australije.
        </p>
        <h3 className="blogPost__h3">4. Stabilnost i bezbednost</h3>
        <p className="blogPost__content__p">
          Iako je Australija poznata po otrovnim vrstama insekata i gmizavaca,
          savremenom čoveku najčešće preti opasnost od drugog čoveka. Takve
          bojazni nema u Australiji: stopa kriminala je niska i izlazak na ulicu
          nije rizičan kao što je postao u Evropi poslednjih godina. Takodje,
          Australijanci su medju retkim, blagoslovenim, nacijama koje žive u
          miru i bez stresa, ne znajući ko je premijer države, niti koje su
          vladajuće stranke. Za politiku ne ostaje previše vremena u zemlji koja
          vas svakodnevno zavodi svojom prirodom i lepotom. Ko bi gledao mimo te
          lepote u ekrane?
        </p>
        <h3 className="blogPost__h3">5. Najsrećnija nacija na svetu</h3>
        <p className="blogPost__content__p">
          Australijanci nose titulu najsrećnijih i najraspoloženijih ljudi na
          svetu. Svi prethodno pomenuti faktori svakako doprinose tome, a tu je
          i veliki broj sunčanih dana. Mnogo govori i podatak da je Australija
          zemlja sa najdužim životnim vekom. Prosečna starost Australijanaca je
          84 godine. U Australiji možete da vršite fotosintezu, izbacujući
          negativnu energiju i proslavljajući Novu godinu na nekoj od
          australijskih plaža, na obali okeana, uz roštilj i hladno piće, u
          društvu ljudi iz celog sveta koji ne sude o drugima na osnovu mesta u
          kome su rodjeni. Umesto zaključka, jer kako da stavimo tačku na jednu
          priču kakva je Australija: šta vi mislite, da li smo Australiju
          sagledali kroz ružičaste naočari ili ima i istine u ovome? Gde ćete
          vi, sada kada možemo bilo kuda?
        </p>
        <h5 className="blogPost__signature">Hugs, Tičerka B.</h5>
      </div>
    </div>
  );
};

export default BlogPost;
