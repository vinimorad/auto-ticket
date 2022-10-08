import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal'
import { Container } from './styles';
import { cpfMask } from '../../utils/cpfMask'
import { api } from '../../services/api';

interface events {
  id: number;
  event_name: string;
  date: string;
  client_name: string;
  cpf: string;
  ticket_price: number;
}

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  handleGetEvents: () => void;
  editInfo: any;
  onSale: boolean;
  setOnSale: any;
  setEditInfo: any;
}


export const AddSales = ( props : ModalProps) => {

  const [event_name, setEvent ] = useState(''); 
  const [date, setDate] = useState('');
  const [client_name, setClientName] = useState(''); 
  const [cpf, setCPF ] = useState(''); 
  const [money, setMoney ] = useState(''); 


  
  async function handleCreateSale(event : FormEvent) {
    event.preventDefault();

    const ticket_price = Number(money);

    const body = {
      event_name,
      date,
      client_name,
      cpf,
      ticket_price
    }

    const id = props.editInfo.id

    const bodyUpdate = {
      id,
      event_name,
      date,
      client_name,
      cpf,
      ticket_price
    }

    
    if(props.onSale) {
      const createSale = await api.post('event', body).catch(error => console.log("Ops! Ocorrey um erro" + error))
      props.setOnSale(false)
      
    }else {
      await api.put('event', bodyUpdate).catch(error => console.log("Ops! Ocorrey um erro" + error))
    }

    props.onRequestClose();
    props.handleGetEvents()

    setEvent('')
    setDate('')
    setClientName('')
    setCPF('')
    setMoney('')
    
  }

  function editInfos() {
    if(props.editInfo){
      setEvent(props.editInfo.event_name)
      setDate(props.editInfo.date)
      setClientName(props.editInfo.client_name)
      setCPF(props.editInfo.cpf)
      setMoney(props.editInfo.ticket_price)
    }
  }
  

  function handleRequestClose() {
    
    if(props.onSale) {
      console.log("OIII")
      setEvent('')
      setDate('')
      setClientName('')
      setCPF('')
      setMoney('')
      props.setOnSale(false)
    }else {
      editInfos()
      props.setEditInfo([])
    }

    props.onRequestClose();
  }

  

  useEffect(() => {

    if(props.onSale) {
      console.log("OI2222")
      setEvent('')
      setDate('')
      setClientName('')
      setCPF('')
      setMoney('')
    }else {
      editInfos()
    }
    
  }, [props.editInfo, props.onSale])

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={handleRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
      <Container onSubmit={handleCreateSale}>
          <span onClick={handleRequestClose}>X</span>
          {props.onSale ? <h1>Cadastrar Venda</h1> : <h1>Editar Venda</h1>}
          
          <span>Nome do evento</span>
          <input type="text" value={event_name} maxLength={20} onChange={(event) => setEvent(event.target.value)}/>
          <span>Nome do evento</span>
          <input type="date" value={date} onChange={(event) => setDate(event.target.value)}/>
          <span>Nome do cliente</span>
          <input type="text" value={client_name} onChange={(event) => setClientName(event.target.value)} maxLength={20} />
          <span>CPF do cliente</span>
          <input type="text" value={cpf} onChange={(event) => setCPF(cpfMask(event.target.value))}/>
          <span>Valor do ingresso</span>
          <input type="text" value={money} maxLength={6} onChange={(event) => setMoney(event.target.value.replace(/\D/g, ''))}/>
          {props.onSale ? <button>Cadastrar</button> : <button id="save">Salvar</button>}
      </Container>

      </Modal>
    </>

  )
}