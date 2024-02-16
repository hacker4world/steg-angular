import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class GroupesService {
  private readonly serverLink =
    "https://super-silver-production.up.railway.app/groupes";

  constructor(private readonly httpClient: HttpClient) {}

  public afficherGroupes() {
    return this.httpClient.get(this.serverLink + "/afficher");
  }

  public afficherGroupeMembres(id: number) {
    return this.httpClient.get(this.serverLink + `/afficher/membres?id=${id}`);
  }

  public afficherGroupeTaches(id: number) {
    return this.httpClient.get(
      `https://super-silver-production.up.railway.app/taches/afficher?id=${id}`
    );
  }

  public creerGroupe(nom: string, membres: any[]) {
    return this.httpClient.put(this.serverLink + "/creer", {
      nom,
      membres,
    });
  }

  public effacerGroupe(id: number) {
    return this.httpClient.delete(this.serverLink + `/effacer?id=${id}`);
  }

  public ajouterTache(
    description: string,
    dateLimite: string,
    idGroupe: number
  ) {
    return this.httpClient.put(
      `https://super-silver-production.up.railway.app/taches/ajouter`,
      {
        idGroupe,
        description,
        dateLimite,
      }
    );
  }

  public supprimerTache(idTache: number) {
    return this.httpClient.delete(
      `https://super-silver-production.up.railway.app/taches/supprimer?id=${idTache}`
    );
  }

  public effacerMembre(idMembre: number) {
    return this.httpClient.delete(
      this.serverLink + `/effacer-stagiere?id=${idMembre}`
    );
  }

  public modifierGroupe(id: number, nom: string) {
    return this.httpClient.post(this.serverLink + "/modifier-nom", {
      idGroupe: id,
      nom,
    });
  }
}
