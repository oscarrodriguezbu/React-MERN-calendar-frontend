

export const CalendarEvent = ({ event }) => {
    //opcion de mejora: usar memo al event
    const { title, user } = event;

    return (
        <>
            <strong>{title}</strong>
            <span> - {user.name}</span>
        </>
    )
}
