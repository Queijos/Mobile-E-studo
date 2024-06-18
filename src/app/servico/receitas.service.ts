import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Receita {
  receitaid: string;
  titulo: string;
  descricao: string;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  private baseUrl = 'http://127.0.0.1/php/receitas.php';  // Base URL da API

  constructor(private http: HttpClient) { }

  // Buscar receita por ID
  getReceita(receitaId: string): Observable<Receita> {
    return this.http.get<Receita>(`${this.baseUrl}?receitaid=${receitaId}`);
  }

  // Criar nova receita
  criarReceita(formData: FormData): Observable<any> {
    return this.http.post<any>(this.baseUrl, formData);
  }

  // Atualizar receita existente
  atualizarReceita(receita: Receita): Observable<any> {
    return this.http.put(`${this.baseUrl}`, receita);
  }

  // Deletar receita
  deletarReceita(receitaId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}?receitaid=${receitaId}`);
  }

  // Carregar todas as receitas
  getReceitas(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.baseUrl);
  }
}
