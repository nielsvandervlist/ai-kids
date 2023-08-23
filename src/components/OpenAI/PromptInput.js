import React, {useCallback, useState} from 'react'
import Image from 'next/image'
import {useUpdate} from 'ra-fetch'

export default function PromptInput({completion, setCompletion}) {

    const [value, setValue] = useState('')
    const [user, setUser, submitUser] = useUpdate('user.points', {
        points: 0
    })

    const handleInput = useCallback(
        (e) => {
            setValue(e.target.value)
        }, [])

    function handleMissionComplete(){
        submitUser().then((res) => {
            if(!res.errors.length){
                console.log(res)
            }
        })
    }

    const sendPrompt = useCallback(
        async (e) => {

            if (!value) {
                return false
            }

            if (e.key === 'Enter' || e.type === 'click') {
                setCompletion(true)
                const response = await fetch('/api/prompt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({text: value}),
                })

                const data = await response.json()

                if (!data) {
                    return setCompletion({
                        data: 'Your request is not available right now',
                    })
                }

                setUser({
                    points: 3
                })

                setCompletion({
                    data: data,
                })
            }
        }, [value])

    return <div className={'prompt-input'}>
        <>
                <textarea
                    value={value}
                    placeholder={'Type anything you want for the image to generate'}
                    onChange={handleInput}
                    onKeyDown={sendPrompt}
                    className={'w-full mb-4 text-white'}
                />
            {!completion.data &&
                <button onClick={(e) => sendPrompt(e)} className={'btn btn--orange'}>Create image</button>}
        </>
        {
            completion.data && <div>
                <h2 className={'label mb-4'}>This is your generated text:</h2>
                <p className={'text mb-8'}>{completion.data}</p>

                <button
                    className={'btn btn--orange'}
                    onClick={() => handleMissionComplete()}
                >
                    Complete mission and add 3 points
                </button>

            </div>
        }
    </div>
}
