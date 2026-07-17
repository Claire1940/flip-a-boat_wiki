import {
	Ticket,
	CalendarClock,
	BookOpen,
	Ship,
	Wrench,
	Coins,
	Truck,
	type LucideIcon,
} from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'codes' -> t('nav.codes')
	path: string // URL 路径，如 '/codes'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

// 导航配置：7 个内容分类（依据 0_meta/flip-a-boat_wiki/关键词.json；community 不进导航）
export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'codes', path: '/codes', icon: Ticket, isContentType: true },
	{ key: 'release', path: '/release', icon: CalendarClock, isContentType: true },
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
	{ key: 'boats', path: '/boats', icon: Ship, isContentType: true },
	{ key: 'repairs', path: '/repairs', icon: Wrench, isContentType: true },
	{ key: 'money', path: '/money', icon: Coins, isContentType: true },
	{ key: 'transport', path: '/transport', icon: Truck, isContentType: true },
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
) // 移除开头的 '/' -> ['codes', 'release', 'guide', 'boats', 'repairs', 'money', 'transport']

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
