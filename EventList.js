import React, {Component} from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'
import EventCard from './EventCard'

const styles = StyleSheet.create ({
    list: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#F3F3F3'
    }
})

class EventList extends Component {

    state = {
        events: []
    }

    componentDidMount() {

        setInterval(() => {
            this.setState({
                // Events is going to be overwritten, for eacht event it should have a new attribute called timer. 
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now(),
                }))
            })
        }, 1000) // Updated every 1000 milliseconds

        const events = require('./db.json').events.map(e => ({ // e: short for event
            ...e, // overwriting events
            date: new Date(e.date)
        }))
        this.setState({ events })
    }

    render() {
        return (
            <FlatList 
            style={styles.list}
            data={ this.state.events }
            renderItem={({ item }) => <EventCard event={item} />}
            // id is unique to the item
            keyExtractor={ item => item.id }
            />
        )
    }

}

export default EventList