import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Button } from 'antd';
import { Input } from 'antd';

export default function Home() {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <Input placeholder="Basic usage" />
    </div>

  )
}
