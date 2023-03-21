<template>
  <main>
    <div class="antialiased container mx-auto max-h-max w-3/5">
      <h1
        class="uppercase font-sans antialiased font-semibold text-2xl ml-5 mb-3"
        >About the creator</h1
      >
      <div class="my-5">
        <p>
          {{ about.descr }}
          <a
            class="text-teal-700 hover:text-white hover:bg-teal-700 duration-300"
            :href="about.apiLink"
            >{{ about.apiLinkDesc }}</a
          >.
        </p>
      </div>
      <div class="my-5">
        <p>
          {{ about.repoDescr }}
          <a
            class="text-teal-700 hover:text-white hover:bg-teal-700 duration-300"
            :href="about.githubProjectLink"
          >
            {{ about.githubProjectDesc }}
          </a>
          {{ about.contactDesc }}
        </p></div
      >
      <div class="my-5">
        <p>
          <a
            class="text-teal-700 hover:text-white hover:bg-teal-700 duration-300"
            :href="about.portfolioLink"
          >
            {{ about.portfolioDesc }}
          </a>
          /
          <a
            class="text-teal-700 hover:text-white hover:bg-teal-700 duration-300"
            :href="about.linkedInLink"
          >
            {{ about.linkedInDesc }}
          </a>
          /
          <a
            class="text-teal-700 hover:text-white hover:bg-teal-700 duration-300"
            :href="about.githubLink"
          ></a
          >{{ about.githubDescr }}
        </p>
        <p>
          Email:
          <a
            class="text-teal-700 hover:text-white hover:bg-teal-700 duration-300"
            :href="about.emailLink"
          ></a
          >{{ about.emailDescr }}
        </p></div
      >
    </div>
  </main>
</template>

<script lang="ts">
import { about } from '../data/about';

export default {
  data() {
    return {
      about: about,
    };
  },
};
</script>
