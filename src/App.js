import React,{ useState, useEffect} from 'react'
import './App.css';
import Box from './box'

export default function App() {
  const [data,setData] = useState([])
  let api = "https://www.reddit.com/r/wallpapers.json?&limit=96&raw_json=1"
  useEffect(() => {
    fetch(api).then(
      (res) => res.json()
      .then(
        (res) => {
          let newArray = []
          res.data.children.map((child) => {
            try {
              if(child.data) {
                newArray.push({
                  title: child.data.title,
                  thumbnail: child.data.thumbnail,
                  url: child.data.url,
                  author: child.data.author,
                  id: child.data.id
                })
              }
            }catch(err) {
              console.log(err)
            }
          });setData(newArray);console.log(data)
        }
      )
    )
  }, [])
  return (
    <div className="app">
      <h1>Wallspaper from Reddid</h1>
      {data.map((box)=>{
        return (
          <Box key={box.key} data={box} />
        )
      })}
    </div>
  );
}


