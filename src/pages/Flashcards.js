import React from 'react'
import Flashcard from './Flashcard'

class Flashcards extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.flashcards.map(flashcard => (
                        <Flashcard question={flashcard.question} id={flashcard.id} remove={this.props.remove} answer={flashcard.answer} key={flashcard.id} raised />
                    ))
                }
            </div>

        )
    }

}

export default Flashcards;