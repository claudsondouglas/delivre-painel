export default function useCookie(name: string) : string | undefined {
    // access cookies and get a cookie caled name
    return document.cookie.split('; ')?.find(row => row.startsWith(name))?.split('=')[1]
}