<template>
    <div>
        <h1>Registrer deg som artist</h1>

        <div>
            <artist-create></artist-create>
        </div>
    </div>
</template>

<script>
import ArtistCreate from '../components/artists/ArtistCreate'

export default {
    name: 'AddArtistPage',
    components: {
        ArtistCreate
    }
}
</script>