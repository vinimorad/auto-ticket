import { Base, Box, Container, Header, TableBox } from "./styles"
import Modal from 'react-modal'

import {AddSales} from '../modal/index'

import { cpfMask } from '../../utils/cpfMask'

import { useEffect, useState } from "react"

import {api} from '../../services/api'

import dolarSymbol from '../images/dollar.png'
import trash from '../images/trash.png'
import edit from '../images/edit.png'

interface events {
  id: number;
  event_name: string;
  date: string;
  client_name: string;
  cpf: string;
  ticket_price: number;
}

Modal.setAppElement('#root');

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState<events[]>([]);
  const [money, setMoney] = useState(''); 
  const [editInfo, setEditInfo] = useState<events[]>()
  const [onSale, setOnSale] = useState(false) 
  const [filter, setFilter] = useState(''); 

  async function handleGetEvents() {
    const {data} = await api.get('event');

    if(data.length > 0){
      calcMoney(data)
    }
    setEditInfo(data)
    setEvents(data)
    return data
  }



  function calcMoney(data : Array<Object>) {
    const ListMoney : Array<number> = []
    data.forEach((item : any) => {
      const ticketPrice = item.ticket_price
      ListMoney.push(ticketPrice)
    })

    if(ListMoney.length > 0){
      const money = ListMoney.reduce((initialValue : number, currentValue : number) => initialValue + currentValue)

      const amount = new Intl.NumberFormat('pt-BR', {
         style: 'currency',
         currency: 'BRL',
         }).format(money)

      setMoney(amount)
    }else {
      setMoney('0')
    }


    
  }

    async function removeEvent(id : number) {
      const newState = events.filter(event => event.id !== id)
      await api.delete('/event/' + id).then(response => {
        if(response.status == 200){
          setEvents(newState)
          calcMoney(newState)
        }
      })


    }

    function handleEdit(event : any) {
      setEditInfo(event)
      setIsOpen(true)
    }

  
    function OpenModal() {
      setOnSale(true)
      setIsOpen(true)
      
    }
    
    function CloseModal() {
      setIsOpen(false)
    }
    
    useEffect(() => {
      handleGetEvents();
    }, [])


  return (
    <>
      <Header>
        <Box>
          <h1>AutoTicket</h1>
        </Box>
      </Header>
      <Container>
        <Base>
            <div className="moneybox">
              <div className="circle">
                <img src={dolarSymbol} alt="Simbolo do dolar" />
              </div>
                <div className="box">
                  <span>Receitas</span>
                  <p>{money ? money : 'R$ 0'}</p>
                </div>
            </div>
            <button onClick={OpenModal}>Adicionar Venda</button>
        </Base>
        <AddSales
          isOpen={isOpen}
          onRequestClose={CloseModal}
          handleGetEvents={handleGetEvents}
          editInfo={editInfo}
          onSale={onSale}
          setOnSale={setOnSale}
          setEditInfo={setEditInfo}
        />
        <TableBox>
          <div className="containertable">
            <input type="text" placeholder="Digite o CPF do cliente" value={filter} onChange={event => setFilter(cpfMask(event.target.value))} maxLength={14}/>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome do Evento</th>
                  <th>Data do Evento</th>
                  <th>Nome do Cliente</th>
                  <th>CPF do Cliente</th>
                  <th>Valor do Ingresso</th>
                </tr>
              </thead>
              <tbody>
                {events.filter(event => {
                  return (!filter.trim()) || (event.cpf.toLowerCase().includes(filter.toLowerCase()));

                }).map(event => {
                  const date = new Date(event.date.replaceAll('-', '/'));
                  return (
                    <tr key={event.id}>
                      <td>{event.id}</td>
                      <td>{event.event_name}</td>
                      <td>{new Intl.DateTimeFormat('pt-br').format(date)}</td>
                      <td>{event.client_name}</td>
                      <td>{event.cpf}</td>
                      <td id="price">{new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL',}).format(event.ticket_price)}</td>
                      <td className="couplebottom">
                        <button onClick={() => removeEvent(event.id)}><img src={trash} alt="Icone de lixeira" /></button>
                        <button onClick={() => handleEdit(event)}><img src={edit} alt="Icone para editar" /></button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </TableBox>
      </Container>
    </>
  )
}


