import Card from '@/components/Cards/Card'

const AuthCard = ({ logo, children }) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <Card className="w-full sm:max-w-md overflow-hidden">
            {children}
        </Card>
    </div>
)

export default AuthCard
