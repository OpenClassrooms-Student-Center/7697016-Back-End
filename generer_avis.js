const { faker } = require("@faker-js/faker");

const NB_AVIS = 20;

const avis = [];
let avis_id = 1;
let piece_id = 0;

for (let i = 0; i < NB_AVIS; i++) {
	avis.push({
		id: avis_id++,
		pieceId: (piece_id++) % 5 + 1,
		utilisateur: faker.name.findName(),
		commentaire: faker.lorem.sentence(),
		nbEtoiles: calculer_nb_etoiles(),
	});
}

console.log(JSON.stringify(avis, null, 2));

/**
 * @returns Un nombre entre 1 et 5, avec plus de chances d'avoir un nombre élevé.
 */
function calculer_nb_etoiles() {
	const seuils =  [1.5, 3.75, 7, 11, 17];
	const nb_aleatoire = Math.random() * 17;

	for (let i = 0; i < seuils.length; i++) {
		if (nb_aleatoire < seuils[i]) {
			return i + 1;
		}
	}
}
