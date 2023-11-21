import { useState } from 'react'
import uuid from 'react-uuid'

export function ListWithUniqueId() {
  const [list, setList] = useState<{ data: string; id: string }[]>([])
  const [value, setValue] = useState('')

  return (
    <div>
      <h2>use Unique Id as key</h2>
      <div>
        <ul>
          {list.map(({ id, data }) => (
            <>
              <li key={id}>
                <input placeholder='입력하세요' />#{id}. {data}
              </li>
              <button
                onClick={() => {
                  setList(list.filter(({ id: currentId }) => id !== currentId))
                }}
              >
                삭제
              </button>
            </>
          ))}
        </ul>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setList([...list, { id: uuid(), data: value }])
            setValue('')
          }}
        >
          <input name='data' value={value} onChange={(event) => setValue(event?.target.value)} />
          <button type='submit'>등록</button>
        </form>
      </div>
    </div>
  )
}

export function ListWithIndex() {
  const [list, setList] = useState<string[]>([])
  const [value, setValue] = useState('')

  return (
    <div>
      <h2>use Index as key</h2>
      <div>
        <ul>
          {list.map((value, index) => (
            <>
              <li key={index}>
                <input placeholder='입력하세요' />#{index}. {value}
              </li>
              <button
                onClick={() => {
                  setList(list.filter((value, currentIndex) => index !== currentIndex))
                }}
              >
                삭제
              </button>
            </>
          ))}
        </ul>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setList([...list, value])
            setValue('')
          }}
        >
          <input name='data' value={value} onChange={(event) => setValue(event?.target.value)} />
          <button type='submit'>등록</button>
        </form>
      </div>
    </div>
  )
}
