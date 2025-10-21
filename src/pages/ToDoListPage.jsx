// компонент страница

import { Header } from "../components/Header/Header"
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"

// import React from "react"
export const ToDoListPage = () => {
    return (
        // оболочка нашего контента. не учитывается как див <React.Fragment>
        <>
            <Header />
            <Form />
            <ToDoList />
        </>
    )
}