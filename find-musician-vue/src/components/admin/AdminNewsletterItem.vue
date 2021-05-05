<template>
    <article class="m-3">
        <div class="card">
            <div class="card-body">
                <h5 class="card-text">{{ email }}</h5>
            </div>
            <div class="flex">
                <button @click="getEmail" class="btn btn-primary" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${id}`" aria-expanded="false" aria-controls="collapse">
                    Rediger
                </button>
                <button @click="deleteFromDb" class="btn btn-danger">
                    Slett
                </button>
                <div class="collapse" :id="`collapse${id}`">
                    <div class="form-floating mb-3">
                        <input v-model="emailById.email" type="text" id="name-input" class="form-control" placeholder="Navn">
                        <label for="name-input">Ny email</label>
                    </div>
                    <div>
                        <input @click="updateEmail(emailById.id)" type="button" value="Rediger email" class="form-control bg-success text-white mt-2">
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import newsletterService from '../../services/newsletterService'

export default {
    name: 'AdminNewsletterItem',
    props: {
        id: Number, 
        email: String
    },
    setup( props ) {

        const { deleteEmail, getEmailById, emailById, putEmail } = newsletterService();

        const getEmail = () => {
            getEmailById( props.id );
        }

        const updateEmail = () => {
            const editEmail = (element) => {
            const emailToEdit = {
                id: parseInt(element.id),
                email: element.email
            }

            putEmail( emailToEdit );
            location.reload();

            }

            editEmail( emailById.value )

        }

        const deleteFromDb = () => {
            deleteEmail( props.id );
            location.reload();
        }

        return {
            getEmail,
            emailById,
            updateEmail,
            deleteFromDb
        }

    }
}
</script>