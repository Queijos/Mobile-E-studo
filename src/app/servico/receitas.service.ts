import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Receita {
  receitaid: string;
  usuario_id?: string;
  titulo: string;
  descricao: string;
  imagem?: string;  // Alterado para string
  usuario_nome?: string;  // Nome do usuário
}

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  private baseUrl = 'http://127.0.0.1/php/receitas.php';

  constructor(private http: HttpClient) { }

  getReceita(receitaId: string): Observable<Receita> {
    return this.http.get<Receita>(`${this.baseUrl}?receitaid=${receitaId}`);
  }

  criarReceita(receita: FormData): Observable<any> {
    return this.http.post<any>(this.baseUrl, receita);
  }

  atualizarReceita(receita: Receita): Observable<any> {
    const formData = new FormData();
    formData.append('receitaid', receita.receitaid);
    formData.append('titulo', receita.titulo);
    formData.append('descricao', receita.descricao);
    if (receita.imagem) {
      formData.append('imagem', receita.imagem);
    }
    return this.http.put<any>(this.baseUrl, formData);
  }

  deletarReceita(receitaId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}?receitaid=${receitaId}`);
  }

  criarReceitaComImagem(receita: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/uploadAndCreate.php`, receita);
  }

  getReceitas(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.baseUrl);
  }
}
