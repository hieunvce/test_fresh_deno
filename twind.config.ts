import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  plugins: {
    'scroll-snap-x': { 'scroll-snap-type': 'x mandatory' },

  }
} as Options;
