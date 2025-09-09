import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
  iconColor: string;
}

export function ServiceCard({ title, description, features, icon, iconColor }: ServiceCardProps) {
  return (
    <Card className="service-card shadow-sm hover:shadow-lg transition-all h-full">
      <CardHeader>
        <div className={`${iconColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
          <i className={`fas fa-${icon} text-xl`}></i>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full"
          data-testid={`button-service-${title.toLowerCase().replace(' ', '-')}`}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}
