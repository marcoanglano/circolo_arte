/** GUIDA:
*   "speech" = intervento.
*   - id: identificativo univoco dell'intervento.
*   - tema: argomento dell'incontro, deciso da uno dei partecipanti (può non esserci un tema).
*   - presentatore: persona che fa l'intervento.
*   - arte: categoria di cui fa parte l'elemento chiave dell'intervento (raramente non fa parte di alcuna arte).
*   - autore:
*      - nome: autore dell'elemento chiave.
*      - interno: indica se l'autore è interno (TRUE) o esterno (FALSE) al circolo.
*   - materiale:
*      - tipo: materiale inerente l'intervento (DOC, Google Books, PPT, Spotify, Treccani, Wikipedia).
*      - link: collegamento al materiale.
*   - note: citazioni o note di vario tipo relative all'intervento.
*/

const archive2026 = {

  speech015: {
    id: "26_04_03",
    tema: "Occulto 🧿",
    presentatore: "Stefano P.",
    arte: "Letteratura 📚",
    titolo: "Barbablù. Gilles de Rais e il tramonto del Medioevo",
    autore: { nome: "Ernesto Ferrero", interno: false },
    materiale: { tipo: "Spotify", link: "https://docs.google.com/presentation/d/1usFb1rfOrPkLKNs4JqOiz1_qIc8Qj8wh/edit?usp=sharing&ouid=115157929162835736634&rtpof=true&sd=true" },
    note: "L'uomo focaccina"
  },

  speech014: {
    id: "26_04_02",
    tema: "Occulto 🧿",
    presentatore: "Giulia A.",
    arte: "Cinema 🎥",
    titolo: "Insidious",
    autore: { nome: "James Wan", interno: false },
    materiale: { tipo: "Wikipedia", link: "https://it.wikipedia.org/wiki/Insidious_(film)" },
    note: "C'è qualcosa che non va qui [Cit.]"
  },

  speech013: {
    id: "26_04_01",
    tema: "Occulto 🧿",
    presentatore: "Marco A.",
    arte: "Videogioco 👾",
    titolo: "The Last Door",
    autore: { nome: "The Game Kitchen", interno: false },
    materiale: { tipo: "Wikipedia", link: "https://it.wikipedia.org/wiki/The_Last_Door" },
    note: "Ultimate madness would take inhuman form [Cit.]"
  },

  speech012: {
    id: "26_03_04",
    tema: "Memoria 🧠",
    presentatore: "Benedetta A.",
    arte: "Musica 🎼",
    titolo: "Lo ricordo io per te",
    autore: { nome: "Michele Bravi", interno: false },
    materiale: { tipo: "Spotify", link: "https://open.spotify.com/intl-it/track/6Ncatk67wjaRxmpckciBBV" },
    note: "Ricordo la piazza, l'odore del pane, ricordo l'amore [Cit.]"
  },

  speech011: {
    id: "26_03_03",
    tema: "Memoria 🧠",
    presentatore: "Edoardo L.",
    arte: "Musica 🎼",
    titolo: "Mara e il maestrale",
    autore: { nome: "Murubutu", interno: false },
    materiale: { tipo: "Spotify", link: "https://open.spotify.com/intl-it/track/2IMUsyucKH0BYudarevTNL" },
    note: "Presero il volo come i gabbiani dall'acqua [Cit.]"
  },

  speech010: {
    id: "26_03_02",
    tema: "Memoria 🧠",
    presentatore: "Marco A.",
    arte: "Letteratura 📚",
    titolo: "Ozymandias",
    autore: { nome: "Percy Bysshe Shelley", interno: false },
    materiale: { tipo: "Wikipedia", link: "https://it.wikipedia.org/wiki/Ozymandias_(poesia)" },
    note: "Nothing beside remains [Cit.]"
  },

  speech009: {
    id: "26_03_01",
    tema: "Memoria 🧠",
    presentatore: "Stefano P.",
    arte: "Letteratura 📚",
    titolo: "Seppellite il mio cuore a Wounded Knee",
    autore: { nome: "Dee Brown", interno: false },
    materiale: { tipo: "PPT", link: "https://docs.google.com/presentation/d/1Z9cKjEZkEzMJRMgqkLE_PnVQqdVlFsKx/edit?usp=sharing&ouid=115157929162835736634&rtpof=true&sd=true" },
    note: "Destino manifesto"
  },

  speech008: {
    id: "26_02_04",
    tema: null,
    presentatore: "Marco A.",
    arte: "Letteratura 📚",
    titolo: "La Torre Nera: L'ultimo cavaliere",
    autore: { nome: "Stephen King", interno: false },
    materiale: { tipo: "Wikipedia", link: "https://it.wikipedia.org/wiki/L%27ultimo_cavaliere_(romanzo_Stephen_King)" },
    note: "Ipotizzare un limite è l'unica assurdità [Cit.]"
  },

  speech007: {
    id: "26_02_03",
    tema: null,
    presentatore: "Giulia A.",
    arte: "Cinema 🎥",
    titolo: "Forrest Gump",
    autore: { nome: "Robert Zemeckis", interno: false },
    materiale: { tipo: "Wikipedia", link: "https://it.wikipedia.org/wiki/Forrest_Gump" },
    note: "Non sono un uomo intelligente, ma so cos'è l'amore [Cit.]"
  },

  speech006: {
    id: "26_02_02",
    tema: null,
    presentatore: "Davide S.",
    arte: "Letteratura 📚",
    titolo: "Il re e la statua",
    autore: { nome: "Davide S.", interno: true },
    materiale: { tipo: "DOC", link: "https://docs.google.com/document/d/1KU0-WrGlI1p7qkAaRD4HlA0l5-rnF534shxAZKzq50s/edit?usp=sharing" },
    note: "Ciò che può essere di tutti non può essere mio [Cit.]"
  },

  speech005: {
    id: "26_02_01",
    tema: null,
    presentatore: "Mario S.",
    arte: "Fumetto 💭",
    titolo: "Dimentica il mio nome",
    autore: { nome: "Zerocalcare", interno: false },
    materiale: { tipo: "Wikipedia", link: "https://it.wikipedia.org/wiki/Dimentica_il_mio_nome" },
    note: "Come cazzo si saluta uno che sta morendo? [Cit.]"
  },

  speech004: {
    id: "26_01_04",
    tema: null,
    presentatore: "Stefano P.",
    arte: "Letteratura 📚",
    titolo: "Patagonia express. Appunti dal sud del mondo",
    autore: { nome: "Luis Sepúlveda", interno: false },
    materiale: { tipo: "Wikipedia", link: "https://it.wikipedia.org/wiki/Patagonia_express._Appunti_dal_sud_del_mondo" },
    note: "Morì di tristezza [Cit.]"
  },

  speech003: {
    id: "26_01_03",
    tema: null,
    presentatore: "Francesco T.",
    arte: null,
    titolo: "Ossessione",
    autore: { nome: null, interno: null },
    materiale: { tipo: "Treccani", link: "https://www.treccani.it/vocabolario/ossessione/" },
    note: "Assedio"
  },
  
  speech002: {
    id: "26_01_02",
    tema: null,
    presentatore: "Benedetta A.",
    arte: "Letteratura 📚",
    titolo: "Hamartía",
    autore: { nome: "Rossana Soldano", interno: false },
    materiale: { tipo: "Google Books", link: "https://books.google.it/books/about/Hamart%C3%ADa.html?id=StM9EQAAQBAJ&source=kp_book_description&redir_esc=y" },
    note: "In nome di Dio [Cit.]"
  },
  
  speech001: {
    id: "26_01_01",
    tema: null,
    presentatore: "Edoardo L.",
    arte: "Letteratura 📚",
    titolo: "Il Vangelo secondo Gesù Cristo",
    autore: { nome: "José Saramago", interno: false },
    materiale: { tipo: "Wikipedia", link: "https://it.wikipedia.org/wiki/Il_Vangelo_secondo_Ges%C3%B9_Cristo" },
    note: "Non c'è davanti né dietro [Cit.]"
  }
  
}

/* TEST SITO */

let testElement = document.getElementById("test")

for (let i = 0; i < Object.keys(archive2026).length; i++) {
testElement.innerHTML += `<p>${archive2026[Object.keys(archive2026)[i]].titolo}</p>`
}