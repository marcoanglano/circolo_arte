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
*      - tipo: materiale inerente l'intervento (pagina Wikipedia, video, presentazione, ecc.).
*      - link: collegamento al materiale.
*   - note: citazioni o note di vario tipo relative all'intervento.
*/

const archive2026 = {
  
  speech1: {
    id: "26_01_01",
    tema: null,
    presentatore: "Edoardo L.",
    arte: "Letteratura 📚",
    titolo: "Il Vangelo secondo Gesù Cristo",
    autore: { nome: "José Saramago", interno: false },
    materiale: { tipo: "WIKIPEDIA", link: "https://it.wikipedia.org/wiki/Il_Vangelo_secondo_Ges%C3%B9_Cristo" },
    note: "Non c'è davanti né dietro [Cit.]"
  }
  
};

let testElement = document.getElementById("test");

testElement.textContent = archive2026.speech1.note;