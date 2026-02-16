import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 图片路径处理函数
export function getImagePath(path: string) {
  // 如果路径已经是绝对URL，直接返回
  if (path.startsWith('http')) {
    return path;
  }
  
  // 确保路径以/开头
  return path.startsWith('/') ? path : `/${path}`;
}
