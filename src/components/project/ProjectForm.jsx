import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

import { useEffect, useState } from 'react'

function ProjectForm({btnText}) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'content-type': 'application/json'
        }
        })
        .then((res) => res.json())
        .then((data) => setCategories(data))
        .catch((error) => console.log(error))
    }, [])

    return (
        <form className={styles.form}>
            <Input 
                type="text"
                text="Nome do Projeto"
                placeholder="Insira o nome do Projeto"
                name="name"            
            />

            <Input 
                type="number"
                text="Orçamento do Projeto"
                placeholder="Insira o orçamento total"
                name="budget"            
            />

            <Select 
                name="category_id"
                text="Categoria do Projeto"
                options={categories}
            />

            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm