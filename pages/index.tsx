import type { NextPage } from 'next'
import { useState } from 'react';
import Head from 'next/head'

import {Container, Row, Button} from 'react-bootstrap';

const Home: NextPage = () => {

  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [message, setMessage] = useState<string>();

  const dial = async () => {
    await fetch('/api/dial', {
      method: 'POST',
      headers: {'Content-Type' : "application/json"},
      body: JSON.stringify({phoneNumber, message}),
    });
  }

  return (
    <div>
      <Head>
        <title>Fun Dialer</title>
      </Head>

      <h1 className="flex justify-center">
        Fun Dialer
      </h1>

      <Container>
        <Row>
            <input 
              type="phone"
              defaultValue={phoneNumber} 
              className="border p-1" 
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+1 555 555 5555"
              />
        </Row>
        <Row>
          <textarea
              defaultValue={message}
              className="border p-1 mt-2"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter a message"
            />
        </Row>
        <Row>
          <Button className="mt-2" onClick={dial}>Dial</Button>
        </Row>
      </Container>
    </div>
  )
}

export default Home;
