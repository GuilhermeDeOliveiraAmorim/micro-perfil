import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContentRootProps {
  children: ReactNode[];
  gridArrangement: {
    templateRows: {
      quantity: number;
      fraction: number;
    };
    templateColumns: {
      quantity: number;
      fraction: number;
    };
  };
}

export function ContentRoot({ children, gridArrangement }: ContentRootProps) {
  return (
    <Grid
      height={"100%"}
      p={4}
      templateRows={`repeat(${gridArrangement.templateRows.quantity}, ${gridArrangement.templateRows.fraction}fr)`}
      templateColumns={`repeat(${gridArrangement.templateColumns.quantity}, ${gridArrangement.templateColumns.quantity}fr)`}
      gap={4}
    >
      {children.map((node) => (
        <GridItem bg="tomato">{node}</GridItem>
      ))}
    </Grid>
  );
}
