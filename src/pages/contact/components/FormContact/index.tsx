import { Container, BtnContact, Fields } from './styles'
import { useForm } from 'react-hook-form'
import InputText from '../InputText'
import IconWeb1 from 'public/icons/how-work-1.svg'
import IconWeb2 from 'public/icons/how-work-2.svg'
import IconWeb4 from 'public/icons/how-work-3.svg'
import ContactServices from 'src/pages/contact/components/ContactServices'
import { useState } from 'react'
import { useRouter } from 'next/router'
import emailjs from 'emailjs-com'

const cardServices = [
  {
    Icon: IconWeb1,
  },
  {
    Icon: IconWeb2,
  },
  {
    Icon: IconWeb1,
  },
  {
    Icon: IconWeb4,
  }
]

const FormContact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', reValidateMode: 'onChange', })
  const [isIntialited, setIsIntialited] = useState(false)
  const router = useRouter()

  const onSubmit = (data: any) =>{
    console.log(data)
    emailjs.send('gmail', 'template_r70dzna', data, 'user_Z9ZA15CBTB3P6Kw6xRIeQ')
      .then(() => {
        router.push('/gracias')
      }, () => {
        router.push('/error')
      })
  }

  const handleError = () => {
    setIsIntialited(true)
  }

  return (
    <Container>
      <h2>Ingresa tus datos</h2>
      <form onSubmit={handleSubmit(onSubmit, handleError)}>
        <Fields>
          <InputText
            label="Nombre*"
            register={{...register('firstname', { required: ' ' })}}
            error={errors.firstname?.message}
          />
          <InputText
            label="Apellido*"
            register={{...register('lastname', { required: ' ' })}}
            error={errors.lastname?.message}
          />
          <InputText
            label="Celular"
            register={{...register('phone')}}
            error={errors.phone?.message}
          />
          <InputText
            label="Email*"
            placeholder=''
            register={{...register('email', {
              required: ' ',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Ingresa un correo válido',
              }
            })}}
            error={errors.email?.message}
          />
        </Fields>
        <ContactServices services={cardServices} />
        <BtnContact isDisabled={Object.keys(errors).length !== 0 && isIntialited} type='submit'>COTIZAR SERVICIO</BtnContact>
      </form>
    </Container>
  )
}

export default FormContact