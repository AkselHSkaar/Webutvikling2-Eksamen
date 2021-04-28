<template>
    <div>
        <the-hero></the-hero>
        <action-section-event></action-section-event>
        <action-section-artist></action-section-artist>
    </div>
</template>

<script>
import TheHero from '../components/TheHero'
import ActionSectionEvent from '../components/ActionSectionEvent'
import ActionSectionArtist from '../components/ActionSectionArtist'

export default {
    name: 'HomePage',
    components: { 
        TheHero, 
        ActionSectionEvent, 
        ActionSectionArtist 
    }
}

</script>