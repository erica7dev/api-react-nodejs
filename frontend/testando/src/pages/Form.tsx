import Header from '../components/Header';
import axios from 'axios';
import { ReactEventHandler, ChangeEvent, useEffect, useState } from 'react';

export default function Form() {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3030/estados').then(response => {
      setEstados(response.data);
    })
  }, []);

  interface ICampos {
    cmbUF: string;
    txtNome: string,
    txtIdade: number,
  }

  const [campos, setCampos] = useState<ICampos>({
    txtNome: '',
    txtIdade: 0,
    cmbUF: '0',
  });
  
//  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
//   campos[event.target.name] = event.target.value;
//   setCampos(campos);
//}

  function handleFormSubmit(event: any){
    event.preventDefault();
    console.log(campos);
}

  return (
    <div>
      <Header title={"React Form"} />
      <form>
        <fieldset>
          <legend>
            <h2>Dados de Cadastro</h2>
          </legend>

          <div>
            <label>Nome:
              <input type="text" name="txtNome" id="txtNome" onChange={handleInputChange}/>
            </label>
          </div>

          <div>
            <label>Idade:
              <input type="number" name="txtIdade" id="txtIdade"  />
            </label>
          </div>

          <div>
            <label>UF:
              <select name="cmbUF" id="cmbUF" >
                <option value="0">Selecione uma opção</option>
                {estados.map(estado => (<option key={estado.id} value={estado.id}>{estado.uf}</option>))}
              </select>
            </label>
          </div>
          <input type="submit" value="Salvar" onSubmit={handleFormSubmit}/>
        </fieldset>
      </form>
    </div>
  )
}