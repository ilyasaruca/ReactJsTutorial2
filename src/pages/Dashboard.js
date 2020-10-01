import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import NavMenu from '../components/NavMenu'
import ProductItem from '../components/ProductItem'
import { product } from '../services'
import { messaging } from "../init-fcm";

function Dashboard() {

    const [items, setItems] = useState([])

    useEffect(() => {
        const params = {
            ref: "5380f5dbcc3b1021f93ab24c3a1aac24",
            start: "0"
        }
        product(params).then( res => {
           setItems(res.data.Products[0].bilgiler) 
        })
    }, [])

    useEffect ( ()=> {
        messagingFnc()
      }, [])

      async function messagingFnc () { 
        messaging.requestPermission()
          .then(async function() {
        const token = await messaging.getToken();
        console.log("Token : " + token)
          })
          .catch(function(err) {
            console.log("Unable to get permission to notify.", err);
          });
        navigator.serviceWorker.addEventListener("message", (message) => {
          console.log(message)
          const pid = message.data["firebase-messaging-msg-data"].data.pid
          if ( typeof(pid) !== 'undefined' && pid !== null ) {
            window.location.href = "/detail/"+pid
            console.log('pid', pid)
          }
          
        });
      }

    return (
        <Container>
            <Helmet>
                <title>Dashboard Title</title>
                <meta name="description" content="Dashboard page, product list" />
            </Helmet>
            <NavMenu />
            <h1>Product List</h1>
            <Row>
                { items.map( ( item, index ) =>  {
                return(
                    <ProductItem item={item} key={index} />
                ) 
                })}
            </Row>
        </Container>
    )
}

export default Dashboard
