import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  data_nasc: string;
  genero: string;
  senha: string;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://127.0.0.1/php'; // Base URL da API

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}/getAll.php`);
  }

  getById(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/getById.php?id=${id}`);
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseUrl}/cadastro.php`, cliente);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.baseUrl}/update.php?id=${cliente.id}`, cliente);
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete.php?id=${id}`);
  }

  login(email: string, senha: string): Observable<{ success: boolean, id?: string, nome?: string }> {
    const loginData = { email, senha };
    return this.http.post<{ success: boolean, id?: string, nome?: string }>(`${this.baseUrl}/login.php`, loginData);
  }

  saveUserData(cliente: Cliente) {
    localStorage.setItem('loggedUser', JSON.stringify(cliente));
  }

  getUserData(): Cliente | null {
    const userData = localStorage.getItem('loggedUser');
    return userData ? JSON.parse(userData) : null;
  }

  logout() {
    localStorage.removeItem('loggedUser');
  }

  uploadImage(fileToUpload: File, id: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(`${this.baseUrl}/uploadImage.php?id=${id}`, formData);
  }
}
