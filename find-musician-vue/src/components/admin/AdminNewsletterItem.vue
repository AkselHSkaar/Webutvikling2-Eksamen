<template>
    <article>
        <div class="card">
            <div class="card-body">
                <h5 class="card-text">{{ email }}</h5>
            </div>
            <div class="flex">
                <button class="btn btn-primary">
                    Rediger
                </button>
                <button class="btn btn-danger">
                    Slett
                </button>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'AdminNewsletterItem',
    props: {
        id: Number, 
        email: String
    }
}
</script>