/* eslint-disable-line no-alert */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, Divider, Card, Button } from 'react-md';

import { withMainComponent } from '../hoc';

const NewBook = ({ handleChange, saveBook, cancelBook }) => {
    const styles = {
        save: { marginTop: 15, marginRight: 15 },
        cancel: { marginTop: 15 },
        buttonWrapper: { float: 'right' },
        section: { padding: 20 },
        card: { height: 260, width: 500 },
        header: { alignSelf: 'center' }
    }
    return (
        <div className="md-grid">
            <div className="cards md-cell--8" style={styles.header}>
                <h2>Add New Book</h2>
            </div>
            <div className="cards md-cell--center md-cell--12" >
                <Card style={styles.card}>
                    <form onSubmit={saveBook}>
                        <section style={styles.section}>
                            <TextField
                                id="title"
                                name="title"
                                placeholder="Book title"
                                block
                                paddedBlock
                                onChange={handleChange}
                            />
                            <Divider />
                            <TextField
                                id="author"
                                name="author"
                                placeholder="Book author"
                                block
                                paddedBlock
                                onChange={handleChange}
                            />
                            <Divider />
                            <TextField
                                id="url"
                                name="url"
                                placeholder="Book url"
                                block
                                paddedBlock
                                onChange={handleChange}
                            />
                            <Divider />
                            <div style={styles.buttonsWrapper}>
                                <Button id="save" type="submit" raised primary style={styles.save} >Save</Button>
                                <Button id="cancel" onClick={cancelBook} raised primary style={styles.cancel}>Cancel</Button>
                            </div>
                        </section>
                    </form>
                </Card>
            </div>
        </div>
    );
}

NewBook.PropTypes = {
    saveBook: PropTypes.func.isRequired,
    cancelBook: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default withMainComponent(NewBook);