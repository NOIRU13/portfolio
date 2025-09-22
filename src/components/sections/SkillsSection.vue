<template>
  <section id="skills" class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-base text-gray-600 font-semibold tracking-wide uppercase">Skills</h2>
        <h3 class="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
          技術スタック
        </h3>
        <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
          フロントエンド、バックエンド、ツール、AI技術まで幅広くカバーした技術スキル
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-3">
        <span
          v-for="tech in allTechnologies"
          :key="tech"
          class="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200 hover:bg-gray-50"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const allTechnologies = [
  'Vue.js', 'React', 'Next.js', 'Laravel', 'JavaScript', 'TypeScript', 'PHP', 'Python', 'HTML5', 'CSS3',
  'Tailwind CSS', 'Git', 'Docker', 'Vite', 'Axios', 'AWS', 'Claude code', 'Codex', 'Kiro',
  'Vue Router', 'REST API', 'Responsive Design'
]
</script>