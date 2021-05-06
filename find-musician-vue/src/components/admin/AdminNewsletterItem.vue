<template>
    <article>
        <div class="card">
            <div class="card-body">
                <h5 class="card-text mb-3">{{ email }}</h5>
                <div class="flex">
                    <button @click="getEmail" class="btn btn-primary me-2" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${id}`" aria-expanded="false" aria-controls="collapse">
                        Rediger
                    </button>
                    <button @click="deleteFromDb" class="btn btn-danger">
                        Slett
                    </button>
                    <div class="collapse" :id="`collapse${id}`">
                        <div class="form-floating my-3">
                            <input v-model="emailById.email" type="text" id="name-input" class="form-control" placeholder="Navn">
                            <label for="name-input">Rediger e-post</label>
                        </div>
                        <div>
                            <input @click="updateEmail(emailById.id)" type="button" value="Rediger email" class="btn btn-success">
                        </div>
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