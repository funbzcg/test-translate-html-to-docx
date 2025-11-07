/*
 * @Description: 工程配置 结构化 structure
 * @Date: 2024-11-22 14:42:40
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig(() => {
	// 只在需要时添加 terser 插件
	return {
		plugins: [vue()],
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
			},
		},
	};
});
