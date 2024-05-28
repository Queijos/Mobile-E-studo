import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  data_nasc: string;
  genero: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url = 'http://127.0.0.1/php/cliente';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  remove(id: any): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente);
  }

  update(cliente: Cliente, id: any): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.url}/${id}`, cliente);
  }

  login(email: string, senha: string): Observable<{ success: boolean }> {
    const loginData = { email, senha };
    return this.http.post<{ success: boolean }>(`${this.url}/?login=true`, loginData);
  }

  getById(id: any): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }
}
